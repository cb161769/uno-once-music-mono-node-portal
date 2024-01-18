import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { JwtAuthGuard } from '../guards/auth.guards';
import { UserEntity } from 'src/modules/users/models/user.entity';
@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}
  @Post('/register')
  private register(@Body() body: RegisterDto): Promise<UserEntity> {
    return this.service.register(body);
  }
  @Post('/login')
  private login(@Body() body: LoginDto): Promise<string | never> {
    return this.service.login(body);
  }

  @Post('/refresh')
  @UseGuards(JwtAuthGuard)
  private refresh(@Req() user: Request): Promise<string | never> {
    return this.service.refresh(user as any);
  }
}
