import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TypeTransformPipe } from './pipes/typeTransformPipe';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true, // Allow all origins
    methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Specify allowed headers
    credentials: true, // Allow credentials if necessary
  });



  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
    new TypeTransformPipe(),
  );
  app.use(cookieParser());


  await app.listen(4000, '0.0.0.0');
}
bootstrap();
