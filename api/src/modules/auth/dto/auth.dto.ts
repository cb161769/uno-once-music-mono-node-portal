import { Trim } from 'class-sanitizer';
import {
  IsEmail,
  IsString,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';
export class RegisterDto {
  @Trim()
  @IsEmail()
  public readonly email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minSymbols: 1,
    minLowercase: 2,
    minUppercase: 1,
  })
  public password: string;

  @IsString()
  @IsOptional()
  public readonly name?: string;
}
