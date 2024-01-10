import {
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller({
  version: '1',
  path: 'health',
})
export class HealthcheckController {
  private readonly logger = new Logger(HealthcheckController.name);
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly config: ConfigService,
    private readonly http: HttpHealthIndicator,
  ) {}
  @ApiTags('healthcheck')
  @Get()
  @HealthCheck()
  public check(): any {
    try {
      this.logger.log('iniciando proceso de health-check');
      const port = this.config.get<string>('PORT');
      const memoryAllocation = 300 * 1024 * 1024;
      return this.health.check([
        () => this.memory.checkHeap('memory_heap', memoryAllocation),
        () => this.memory.checkRSS('memory_rss', memoryAllocation),
        () =>
          this.http.pingCheck(
            'http',
            `http://localhost:${port}/api/v1/health/ping`,
          ),
      ]);
    } catch (error) {
      this.logger.fatal(
        `ocurrio un error interno al momento de obtener health-checks`,
        error,
      );
      throw new InternalServerErrorException();
    }
  }
  @ApiTags('ping-health-check')
  @Get('ping')
  public ping(): any {
    try {
      this.logger.log('iniciando proceso de health-check...');
      return 'service-up';
    } catch (error) {
      this.logger.fatal(
        `ocurrio un error interno al momento de obtener health-checks`,
        error,
      );
      throw new InternalServerErrorException();
    }
  }
}
