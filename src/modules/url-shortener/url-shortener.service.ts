import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUrlShortenerDto } from './dto/create-url-shortener.dto';
import { UpdateUrlShortenerDto } from './dto/update-url-shortener.dto';
import { GeneratingUrlShortPath } from '../url-path/url-path';

@Injectable()
export class UrlShortenerService {
  constructor(
    //   private readonly repository: Repository,
    private readonly generatingUrlShortPath: GeneratingUrlShortPath,
  ) {}

  async GetListOfURLs() {
    // const data = await this.repository.FindAllUrls();

    return {};
  }

  async CreateShortURL(originalUrl: string) {
    // const lastSequence = await this.repository.FindLastSequence();

    let lastRowAdded = 0;
    // if (lastSequence) {
    //   lastRowAdded = Number(lastSequence.sequence);
    // }

    const sequence = lastRowAdded + 1;

    const id = this.generatingUrlShortPath.GeneratePath(sequence);

    // await this.repository.CreateShotUrl({
    //   id,
    //   originalUrl,
    //   sequence,
    // });

    return { shotUrl: `${process.env.SERVICE_BASE_URL}/${id}` };
  }

  async CheckAndRedirectsUrl(urlPath: string) {
    const checkPath = urlPath.split('/').filter((address) => address.length);

    if (checkPath.length > 1 || checkPath.length === 0) {
      throw new NotFoundException();
    }

    const urlId = checkPath[0];

    // const findUrl = await this.repository.FindUrlById(urlId);
    const findUrl = null;

    if (!findUrl) {
      throw new NotFoundException();
    }

    return findUrl;
  }
}
