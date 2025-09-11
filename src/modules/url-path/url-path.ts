import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

@Injectable()
export class GeneratingUrlShortPath {
  private readonly chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  private readonly defaultUlLength = 7;

  private EncodeToBaas62(num: number): string {
    let str = '';
    while (num > 0) {
      str = this.chars[num % 62] + str;
      num = Math.floor(num / 62);
    }
    return str || '0';
  }

  private TokenStandardization(token: string) {
    return token.replaceAll('_', '').replaceAll('-', '');
  }

  GeneratePath(num: number) {
    const encoded = this.EncodeToBaas62(num);

    if (encoded.length === this.defaultUlLength) return encoded;

    const remainingUrlValue = this.defaultUlLength - encoded.length;

    const token = randomBytes(32).toString('base64url');

    const tokenStandard = this.TokenStandardization(token);

    const allowedLength = tokenStandard.substring(0, remainingUrlValue);
    return encoded + allowedLength;
  }
}
