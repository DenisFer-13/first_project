import { Injectable } from '@nestjs/common';
import { User } from './interfaces/User';

@Injectable()
export class UsersService {
  users: User[] = [             //Aquí le indico que users será un arreglo de interfaces User.
    {
        id: 1,
        name: 'Denis',
        lastname: 'Ferreyra',
        age: 26
    },
    {
        id: 2,
        name: 'Estefania',
        lastname: 'Chavez',
        age: 22
    },
    {
        id: 3,
        name: 'Maices',
        lastname: 'Ferreyra',
        age: 7
    }
  ];                            //Esto que acabo de crear no es mas que una "base de datos".          
  getUsers(): User[] {          //Luego debajo podemos enviarle los métodos que tendrá este service. Aquí le indicamos que nos devolverá un array de User.
    return this.users;
  }

  getUser(id): User {                                           //Y aquí indicamos que nos devolverá un User.
    return this.users.find(index => index.id === id)
  }

}
