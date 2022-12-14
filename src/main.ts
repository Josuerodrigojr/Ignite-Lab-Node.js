import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //isso abaixo é para lidar com validações
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
