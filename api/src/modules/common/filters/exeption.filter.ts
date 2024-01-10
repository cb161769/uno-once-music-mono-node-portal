import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
@Catch(HttpException)
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const protocol = host.switchToHttp();
    const response = protocol.getResponse<Response>();
    const responseStatus = exception.getStatus();
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      exception: exception.message,
      statusCode: responseStatus,
      message: 'ocurrio un error interno en la petición',
      data: null,
    });
  }
}
