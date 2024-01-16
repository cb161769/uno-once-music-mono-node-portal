import {
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Query,
} from '@nestjs/common';
import { PaypalService } from '../services/paypal.service';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  version: '1',
  path: 'paypal/auth',
})
export class PaypalAuthController {
  private readonly logger = new Logger(PaypalAuthController.name);
  constructor(private readonly service: PaypalService) {}
  @Public()
  @ApiTags('paypal authorization')
  @Get('/client-credentials')
  async getClientCredentials(@Query('clientId') clientId: string) {
    try {
      return this.service.getClientToken(clientId);
    } catch (error) {
      this.logger.fatal(`ocurrio un error interno`, error['message']);
      throw new InternalServerErrorException(error);
    }
  }
}
