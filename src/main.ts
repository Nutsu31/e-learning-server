import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const express = require('express');

const cors = require('cors');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static('src'));
  app.use('/posts/:id', express.static('assets'));
  app.use(cors());
  await app.listen(4000);
}
bootstrap();
