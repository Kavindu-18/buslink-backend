import { Injectable } from '@nestjs/common';

@Injectable()
export class BusService {
  getHello(): string {
    return 'Hello World!';
  }
}
