import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { DecodeService } from './decode.service';
import BaseRepository from 'src/modules/common/base/repository/base.repository';
import { UserEntity } from 'src/modules/users/models/user.entity';
import { UserStatus } from 'src/modules/users/enums/user-status.enum';

@Injectable()
export class AuthService extends BaseRepository<UserEntity> {
  /**
   *
   */
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    private readonly helper: DecodeService,
  ) {
    super(repository);
  }
  public async register(body: RegisterDto): Promise<UserEntity> {
    const u = await this.repository.findOneBy({ email: body.email });
    if (u) {
      throw new HttpException('usuario existente', HttpStatus.CONFLICT);
    } else {
      try {
        body.password = this.helper.encodePassword(body.password);

        const data = body as UserEntity;
        data.isAdmin = false;
        data.status = UserStatus.Active;

        return this.create(data);
      } catch (error) {
        throw new HttpException(error.message, 320);
      }
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
    this.repository.update(user.id, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }
}
