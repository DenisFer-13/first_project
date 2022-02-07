import { Module } from '@nestjs/common'; //users.module.ts es como el índice de todos los elementos users.
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema'; 

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Users', schema:UserSchema }       //Aquí en el modulo, definimos el nombre del schema y le pasamos el schema. Si quiero agregar otros, los voy agregando con comas.
  ])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],                    //Esto no se que es ni para que sirve pero sin esto no anda la app WTF?
})
export class UsersModule {}
