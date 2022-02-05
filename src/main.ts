import { NestFactory } from '@nestjs/core';   //Se trae esto para iniciar el servidor.
import { AppModule } from './app.module';     //Este es el archivo donde se encuentra la aplicación.

async function bootstrap() {                          //Código asíncrono.
  const app = await NestFactory.create(AppModule);    //Esto es como ejecutar una instancia de Express().
  await app.listen(3000);                             //Esta app se escucha en el puerto 3000.
}
bootstrap();
