import { NestFactory } from '@nestjs/core';
import { BusModule } from './bus.module';

async function bootstrap() {
  const app = await NestFactory.create(BusModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
