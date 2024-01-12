import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Trim } from 'class-sanitizer';
export class LoginDto {
  @Trim()
  @IsEmail()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  public readonly password: string;
}
