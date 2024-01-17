import { HttpStatus, HttpException, InternalServerErrorException, Logger } from "@nestjs/common";
import { AxiosResponse } from "@nestjs/terminus/dist/health-indicator/http/axios.interfaces";

export   function evaluateResponse(
    url: string,
    request: AxiosResponse<any>,
  ): AxiosResponse<any> {
      const logger = new Logger('evaluateResponse',{timestamp:true})
    try {
      logger.log(`evaluando respuesta desde la url= ${url}`);
      if (request.status == HttpStatus.OK) {
        this.logger.log('obtenido respuesta de paypal de manera satisfactoria');
        return request;
      } else {
        logger.error(
          'ocurrio un error interno al evaluar respuesta desde endpoint',
          url,
          JSON.stringify(request.data),
        );
        throw new HttpException(request.data, request.status);
      }
    } catch (error) {
      logger.fatal(
        `ocurrio un error interno al momento de evaluar repuesta de paypal`,
        error['message'],
      );
      throw new InternalServerErrorException(error);
    }
  }