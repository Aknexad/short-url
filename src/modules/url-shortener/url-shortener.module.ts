import { Module } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { UrlShortenerController } from './url-shortener.controller';
import { GeneratingUrlShortPath } from '../url-path/url-path';

@Module({
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService, GeneratingUrlShortPath],
})
export class UrlShortenerModule {}
