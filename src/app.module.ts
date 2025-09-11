import { Module } from '@nestjs/common';
import { UrlShortenerModule } from './modules/url-shortener/url-shortener.module';
import { UrlPath } from './modules/url-path/url-path';

@Module({
  imports: [UrlShortenerModule],
  controllers: [],
  providers: [UrlPath],
})
export class AppModule {}
