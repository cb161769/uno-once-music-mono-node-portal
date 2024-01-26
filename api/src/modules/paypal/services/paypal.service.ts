import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AccesTokenResponse } from '../dto/responses/acces.token.response.dto';
import { ClientTokenResponse } from '../dto/responses/client.token.response.dto';
import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/modules/users/models/user.entity';
import { evaluateResponse } from '../utils/response.evaluation.util';
@Injectable()
export class PaypalService {
  private readonly logger = new Logger(PaypalService.name);
  public baseUrl: string;
  protected client_id: string;
  protected client_secret: string;
  public api_version: string;
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    @InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
  ) {
    this.baseUrl =
      this.config.get<string>('paypal.mode') == 'live'
        ? this.config.get<string>('paypal.live_url')
        : this.config.get<string>('paypal.sandbox_url');
    this.client_id = this.config.get('paypal.client_id');
    this.client_secret = this.config.get('paypal.client_secret');
    this.api_version = this.config.get('paypal.api_version');
  }
  public async getAccessToken(): Promise<AccesTokenResponse> {
    try {
      this.logger.log('iniciando proceso de obtener token de paypal');
      const url = this.baseUrl.concat(`/${this.api_version}/oauth2/token`);
      const request = await this.http.axiosRef.request<AccesTokenResponse>({
        method: 'POST',
        baseURL: url,
        headers: {
          Accept: 'application/json',
          'Accept-Language': 'en_US',
          'content-type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: this.client_id,
          password: this.client_secret,
        },
        params: {
          grant_type: 'client_credentials',
        },
      });
      const e = evaluateResponse(url, request);
      return e.data;
    } catch (error) {
      this.logger.fatal(
        `ocurrio un error interno al momento de obtener token de paypal`,
        error['message'],
      );
      throw new InternalServerErrorException(error);
    }
  }
  public async getClientToken(clientId: string): Promise<ClientTokenResponse> {
    try {
      if ((await this.clientExists(clientId)) == true) {
        this.logger.log(
          'iniciando proceso de obtener el token de cliente desde paypal',
        );
        const api_version = this.config.get('paypal.api_version');
        const url = this.baseUrl.concat(
          `/${api_version}/identity/generate-token`,
        );
        const clientSecret = await this.getAccessToken();
        const request = await this.http.axiosRef.request<ClientTokenResponse>({
          method: 'POST',
          baseURL: url,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Accept-Language': 'en_US',
            Authorization: `Bearer ${clientSecret.access_token}`,
          },
          data: {
            customer_id: new Date().getTime(),
          },
        });
        const evaluation = evaluateResponse(url, request).data;

        return evaluation;
      }
    } catch (error) {
      this.logger.fatal(
        `ocurrio un error interno al momento de obtener token de cliente desde payload`,
        error['message'],
      );
      throw new InternalServerErrorException(error);
    }
  }

  public async clientExists(clientId: string): Promise<boolean> {
    try {
      const u = await this.repository.findOneBy({
        id: clientId,
      });
      if (!u) {
        this.logger.warn(`usuario con id= ${clientId} no encontrado`);
        throw new NotFoundException();
      }
      this.logger.log(
        `usuario con Id ${clientId} encontrado, proceder a generar token`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        'ocurrio un error interno al buscar si existe el cliente =',
        clientId,
        error,
      );
      throw new InternalServerErrorException(error);
    }
  }
}
