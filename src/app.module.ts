import { Module } from '@nestjs/common';
import { UrlShortenerModule } from './modules/url-shortener/url-shortener.module';
import { GeneratingUrlShortPath } from './modules/url-path/url-path';

@Module({
  imports: [UrlShortenerModule],
  controllers: [],
  providers: [GeneratingUrlShortPath],
})
export class AppModule {}
