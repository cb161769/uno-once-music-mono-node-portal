import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { GenericPipe } from './modules/common/pipes/generic.pipe';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { ExceptionsFilter } from './modules/common/filters/exeption.filter';
import { ResponseInterceptor } from './modules/common/interceptors/response.interceptors';
import { setupSwagger } from './modules/common/swagger/swagger.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: 'v1',
  });
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  const configService = app.get(ConfigService);
  const appProt = configService.get<number>('PORT');
  app.enableCors({
    origin: configService.get<string>('ORIGIN'),
    methods: ['GET', 'POST', 'PUT', 'PATCH'],
    credentials: true,
    preflightContinue: false,
  });
  app.useGlobalPipes(new GenericPipe());
  const enableDoc = configService.get<boolean>('ENABLE_DOCUMENTATION');
  if (enableDoc) {
    setupSwagger(app);
  }
  app.use(helmet());
  await app.listen(appProt);
}
bootstrap();
