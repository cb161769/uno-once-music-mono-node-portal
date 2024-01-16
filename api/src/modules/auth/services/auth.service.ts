import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/user/models/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from '../dto/auth.dto';
import { LoginDto } from '../dto/login.dto';
import { DecodeService } from './decode.service';
import { UserEntity } from 'src/modules/users/models/user.entity';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    private readonly helper: DecodeService,
  ) {}
  public async register(body: RegisterDto): Promise<UserEntity> {
    try {
      const u = await this.repository.findOneBy({ email: body.email });
      if (!!u) {
        throw new HttpException('usuario existente', HttpStatus.CONFLICT);
      } else {
        body.password = this.helper.encodePassword(body.password);
        return this.repository.save(body);
      }
    } catch (error) {
      throw new HttpException(error.message, 320);
    }
  }
  public async login(body: LoginDto): Promise<string> {
    try {
      const u = await this.repository.findOneBy({
        email: body.email,
        isDeleted: false,
      });
      if (!u) {
        throw new NotFoundException();
      }
      const isPasswordValid = this.helper.isPasswordValid(
        body.password,
        u.password,
      );
      if (!isPasswordValid) {
        throw new HttpException('contrasena invalida', HttpStatus.FORBIDDEN);
      }
      this.repository.update(u.id, { updatedAt: new Date() });
      return this.helper.generateToken(u);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  public async refresh(user: UserEntity): Promise<string> {
    this.repository.update(user.id, { updatedAt: new Date() });

    return this.helper.generateToken(user);
  }
}
