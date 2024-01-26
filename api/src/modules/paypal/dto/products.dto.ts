import { IsString, IsUUID, Min, MinLength } from "class-validator";

export class CreateProductsDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  @MinLength(1)
  type: string;
  @IsUUID()
  id: string;
  @IsString()
  @MinLength(1)
  description: string;
  @IsString()
  @MinLength(1)
  category: string;
  @IsString()
  @MinLength(1)
  image_url: string;
  @IsString()
  @MinLength(1)
  home_url: string;
}