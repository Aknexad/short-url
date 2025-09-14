import { Module } from '@nestjs/common';
import { UrlShortenerModule } from './modules/url-shortener/url-shortener.module';
import { GeneratingUrlShortPath } from './modules/url-path/url-path';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UrlShortenerModule, ConfigModule.forRoot(), DatabaseModule],
  controllers: [],
  providers: [GeneratingUrlShortPath],
})
export class AppModule {}
