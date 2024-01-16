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

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    private readonly helper: DecodeService,
  ) {}
  public async register(body: RegisterDto): Promise<User> {
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
        status: true,
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
      this.repository.update(u.id, { lastLoginAt: new Date() });
      return this.helper.generateToken(u);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  public async refresh(user: User): Promise<string> {
    this.repository.update(user.id, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }
}
