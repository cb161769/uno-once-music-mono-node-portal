import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
@Injectable()
export class GenericPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    try {
      const object = plainToClass(metatype, value);
      const errors = await validate(object, value);
      if (errors.length > 0) {
        throw new BadRequestException(
          `Invalid payload`,
          JSON.stringify(errors),
        );
      }
      return object;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
