import { Inject, Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { PaypalService } from "./paypal.service";
import { CreateProductsDto } from "../dto/products.dto";
import { CreateProductsResponseDto } from "../dto/responses/product.response.dto";
import { AccesTokenResponse } from "../dto/responses/acces.token.response.dto";
import { HttpService } from "@nestjs/axios";
import { generateUrl } from "../utils/url.builder.util";

@Injectable()
export class PaypalProductsService{
      private readonly logger = new Logger(PaypalProductsService.name);
      private access_token:AccesTokenResponse;
    constructor(private readonly paypal: PaypalService,private readonly http: HttpService) {
    }
    async create(dto: CreateProductsDto):Promise<CreateProductsResponseDto>{
        try {
            this.logger.log('inicio de proceso para crear productos a Paypal');
            this.access_token = await this.paypal.getAccessToken();
            const url = this.paypal.baseUrl;
            const version = this.paypal.api_version;
            const requestUrl = generateUrl(url,version,'catalogs/products');
            const result = await this.http.axiosRef.request<CreateProductsResponseDto>({
                method:'POST',
                url: requestUrl,
                headers:{
                    Authorization: `Bearer ${this.access_token.access_token}`
                },
                data: dto

            });
            return result.data;
        } catch (error) {
        this.logger.fatal(
        `ocurrio un error interno al momento de crear producto a paypal`,
        error['message'],
      );
      throw new InternalServerErrorException(error);
        }
    }
}