import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()                                    //Aquí hacemos un GET desde el cliente a la ruta raíz.
  getHello(): string {
    return this.appService.getHello();      //Ya que este es el controlador de la ruta raíz.
  }
}
