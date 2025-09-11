import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Req,
  Res,
} from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { CreateUrlShortenerDto } from './dto/create-url-shortener.dto';
import { UpdateUrlShortenerDto } from './dto/update-url-shortener.dto';
import type { Request, Response } from 'express';

@Controller()
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post()
  async CreateNewShotURL(@Body(ValidationPipe) data: CreateUrlShortenerDto) {
    return await this.urlShortenerService.CreateShortURL(data.url);
  }

  // @Get('/list')
  // async GetListOfUrls() {
  //   return await this.urlService.GetListOfURLs();
  // }

  @Get('/*')
  async RedirectsURL(@Req() req: Request, @Res() res: Response) {
    const urlPath = req.path;

    const redirectURl =
      await this.urlShortenerService.CheckAndRedirectsUrl(urlPath);

    return res.redirect(redirectURl);
  }
}
