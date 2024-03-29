import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/modules/users/models/user.entity';
@Injectable()
export class DecodeService {
  /**
   *
   */
  constructor(
    private readonly jwt: JwtService,
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
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
        isDeleted: false,
        isVerified: true,
      });
      if (!!u) {
        return true;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  public async generateToken(user: UserEntity) {
    return this.jwt.signAsync({ id: user.id, email: user.email });
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
