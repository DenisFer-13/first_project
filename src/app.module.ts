import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({                      //El módulo es un código raíz de la app que contiene controladores, servicios, etc. Cada módulo contiene una parte.
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/nest-mongo-database')],             //Aquí van los modulos que son añadidos al módulo principal.
  controllers: [AppController, UsersController],                                                        //Aquí irían los controllers. Los controladores son las rutas del servidor. 
  providers: [AppService],                                                                              //Aquí hubo que sacar el UsersService, NO SÉ POR QUÉ       
})
export class AppModule {}


//Línea 10 podemos ver que tenemos agregado al módulo principal, además del módulo UsersModule, también el de Mongoose.
//Llamamos a su método forRoot y le pasamos como parámetro el link de la database. Lo creará automaticamente.