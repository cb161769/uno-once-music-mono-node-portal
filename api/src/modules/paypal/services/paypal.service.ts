import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AccesTokenResponse } from '../dto/acces.token.response.dto';
import { ClientTokenResponse } from '../dto/client.token.response.dto';
import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
@Injectable()
export class PaypalService {
  private readonly logger = new Logger(PaypalService.name);
  private baseUrl: string;
  private client_id: string;
  private client_secret: string;
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl =
      this.config.get<string>('paypal.mode') == 'live'
        ? this.config.get<string>('paypal.live_url')
        : this.config.get<string>('paypal.live_url');
    this.client_id = this.config.get('paypal.client_id');
    this.client_secret = this.config.get('paypal.client_secret');
  }
  private async getAccessToken(): Promise<AccesTokenResponse> {
    try {
      this.logger.log('iniciando proceso de obtener token de paypal');
      const api_version = this.config.get('paypal.api_version');
      const url = this.baseUrl.concat(`/${api_version}/oauth2/token`);
      const clientIdAndSecret = `${this.client_id}:${this.client_secret}`;
      const base64 = Buffer.from(clientIdAndSecret).toString('base64');
      const request = await this.http.axiosRef.request<AccesTokenResponse>({
        method: 'POST',
        baseURL: url,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Accept-Language': 'en_US',
          Authorization: `Basic ${base64}`,
        },
        data: 'grant_type=client_credentials',
      });
      return this.evaluateResponse(url, request).data;
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
          customer_id: clientId,
        },
      });
      return this.evaluateResponse(url, request).data;
    } catch (error) {
      this.logger.fatal(
        `ocurrio un error interno al momento de obtener token de cliente desde payload`,
        error['message'],
      );
      throw new InternalServerErrorException(error);
    }
  }
  private evaluateResponse(
    url: string,
    request: AxiosResponse<any>,
  ): AxiosResponse<any> {
    try {
      this.logger.log(`evaluando respuesta desde la url= ${url}`);
      if (request.status == HttpStatus.OK) {
        this.logger.log('obtenido respuesta de paypal de manera satisfactoria');
        return request.data;
      } else {
        this.logger.error(
          'ocurrio un error interno al evaluar respuesta desde endpoint',
          url,
          JSON.stringify(request.data),
        );
        throw new HttpException(request.data, request.status);
      }
    } catch (error) {
      this.logger.fatal(
        `ocurrio un error interno al momento de evaluar repuesta de paypal`,
        error['message'],
      );
      throw new InternalServerErrorException(error);
    }
  }
}
