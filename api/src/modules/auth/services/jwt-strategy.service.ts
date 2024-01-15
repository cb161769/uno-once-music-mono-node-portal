import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { DecodeService } from './decode.service';
@Injectable()
export class JwtstrategyService extends PassportStrategy(Strategy) {
  @Inject(DecodeService)
  private readonly helper: DecodeService;
  /**
   *
   */
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('AUTH_SECRET'),
      ignoreExpiration: false,
    });
  }
  private validate(payload: string): Promise<boolean | never> {
    return this.helper.validateUser(payload);
  }
}
