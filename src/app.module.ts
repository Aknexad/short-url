import { Module } from '@nestjs/common';
import { UrlShortenerModule } from './modules/url-shortener/url-shortener.module';
import { GeneratingUrlShortPath } from './modules/url-path/url-path';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [UrlShortenerModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [GeneratingUrlShortPath],
})
export class AppModule {}
