import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import configService from './config.service';
const { createProxyMiddleware } = require('http-proxy-middleware');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use("/arasaac/api", createProxyMiddleware({
    target: 'https://api.arasaac.org/api',
    changeOrigin: true,
    logger: console
  }));

  await app.listen(configService.getPort());
}
bootstrap();
