import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';                           //Importamos el decorador InjectModel, inyecta un modelo de datos creado anteriormente.
import { Model } from 'mongoose';
import { CreateUser } from './dto/create-user.dto';
import { User } from './interfaces/User';

@Injectable()
export class UsersService {                                               //@InjectModel inyecta un modelo de datos. Necesitamos ponerle un nombre ('Users') y establecer el modelo
  constructor(@InjectModel('Users') private userModel: Model<User>) {}    //del esquema creado (Model<User>). Los modelos se crean BASADOS EN DOCUMENTOS. La interfaz es un objeto.
    async getUsers() {
      return await this.userModel.find()
    }
    async getUser(id: string) {
      return await this.userModel.findById(id);
    }

    async createUser(user: CreateUser) {
      const newUser = new this.userModel(user)      //Acá obviamente CREAMOS el usuario, lo almacenamos en una constante.
      return await newUser.save()                   //Y esto lo que hace es almacenar ese usuario creado EN LA BASE DE DATOS.
    }

  // users: User[] = [             //Aquí le indico que users será un arreglo de interfaces User.
  //   {
  //       id: 1,
  //       name: 'Denis',
  //       lastname: 'Ferreyra',
  //       age: 26
  //   },
  //   {
  //       id: 2,
  //       name: 'Estefania',
  //       lastname: 'Chavez',            //Esto es un caso hardcodeado!!!
  //       age: 22
  //   },
  //   {
  //       id: 3,
  //       name: 'Maices',
  //       lastname: 'Ferreyra',
  //       age: 7
  //   }
  // ];                            //Esto que acabo de crear no es mas que una "base de datos".          
  // getUsers(): User[] {          //Luego debajo podemos enviarle los métodos que tendrá este service. Aquí le indicamos que nos devolverá un array de User.
  //   return this.users;
  // }

  // getUser(id): User {                                           //Y aquí indicamos que nos devolverá un User.
  //   return this.users.find(index => index.id === id)
  // }


}
