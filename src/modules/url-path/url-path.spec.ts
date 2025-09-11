import { Test, TestingModule } from '@nestjs/testing';
import { UrlPath } from './url-path';

describe('UrlPath', () => {
  let provider: UrlPath;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlPath],
    }).compile();

    provider = module.get<UrlPath>(UrlPath);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
