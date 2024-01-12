import { User } from 'src/modules/user/models/user.entity';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class DecodeService {
  /**
   *
   */
  constructor(
    private readonly jwt: JwtService,
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}
  public async deconde(token: string): Promise<any> {
    try {
      return this.jwt.decode(token, null);
    } catch (error) {
      throw new HttpException(error.message, 310);
    }
  }
  public async validateUser(decoded): Promise<boolean> {
    try {
      const u = await this.repository.findOneBy({
        id: decoded.id,
        status: true,
        isVerified: true,
      });
      if (!!u) {
        return true;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new HttpException(error.message, 311);
    }
  }
  public generateToken(user: User): string {
    return this.jwt.sign({ id: user.id, email: user.email });
  }
  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }
  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }
  private async validate(token: string): Promise<boolean | never> {
    try {
      const decoded: unknown = this.jwt.verify(token);

      if (!decoded) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }

      return this.validateUser(decoded);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}