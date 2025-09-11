import { IsUrl, IsNotEmpty, IsString } from 'class-validator';

export class CreateUrlShortenerDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
