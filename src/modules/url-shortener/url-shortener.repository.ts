import { Injectable } from '@nestjs/common';
import { Url as urlModel } from '@prisma/client';
import { DatabaseService } from '../../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class Repository {
  constructor(private readonly databaseService: DatabaseService) {}

  async CreateShotUrl(data: Prisma.UrlCreateInput) {
    return this.databaseService.url.create({
      data,
    });
  }

  async FindAllUrls(): Promise<urlModel[]> {
    return await this.databaseService.url.findMany();
  }

  async FindUrlById(id: string): Promise<urlModel | null> {
    return await this.databaseService.url.findUnique({ where: { id } });
  }

  async FindTotalRecodes() {
    return await this.databaseService.url.count();
  }

  async FindLastSequence() {
    return await this.databaseService.url.findFirst({
      orderBy: {
        createAt: 'desc',
      },
    });
  }

  async FindBiggestSequence() {
    return await this.databaseService.url.aggregate({
      _max: { sequence: true },
    });
  }
}
