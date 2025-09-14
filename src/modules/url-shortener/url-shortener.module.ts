import { Module } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { UrlShortenerController } from './url-shortener.controller';
import { GeneratingUrlShortPath } from '../url-path/url-path';
import { DatabaseService } from '../../database/database.service';
import { Repository } from './url-shortener.repository';

@Module({
  controllers: [UrlShortenerController],
  providers: [
    UrlShortenerService,
    GeneratingUrlShortPath,
    DatabaseService,
    Repository,
  ],
})
export class UrlShortenerModule {}
