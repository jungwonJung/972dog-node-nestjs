import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'common/exceptions/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter())
  

  const config = new DocumentBuilder()
  .setTitle('972Dog')
  .setDescription('반려동물 사이즈 체크 서비스')
  .setVersion('1.0')
  .build();

const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
app.enableCors({ origin: true, credentials: true });
const PORT = process.env.PORT;
await app.listen(PORT);
}
bootstrap();
