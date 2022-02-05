import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'; //Lo que vienen de aquí son "decoradores".
import { CreateUser } from './dto/create-user.dto';
import { User } from './interfaces/User';
import { UsersService } from './users.service';       //Como desde el controlador manejo las rutas, entonces aquí extraigo los métodos del servicio y los utilizo.

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}        //Se debe entonces instanciar a través de este constructor el UsersService. Definiendo el alcance en private.

  @Get('/usuario')                  //Esto es un decorador, sirve para dar información de la ruta. Le podemos pasar una ruta dentro.
  getUsers(): User[] {              //Como es TS, aquí después del método podemos indicar que tipo de dato estamos devolviendo.
    
    return this.usersService.getUsers();
  }

  @Get('/usuario/:id')                  //Ejemplo realizando un pedido de un usuario en específico.
  getUser(@Param('id') id: string): User {              //Tenemos que invocar al decorador Param para indicar cual será el param a buscar.
    return this.usersService.getUser(parseInt(id));
  }

  @Get('/usuariootrodato')                  
  getUsersOtroDato(): {nombre: string} {    //Aquí por ejemplo indicamos que el dato a devolver será un objeto con una propiedad nombre de tipo string.
    
    return {nombre: 'Denis'};                      //Y aquí si le pasamos otra cosa, nos dará error.
  }

  @Post('/usuario')
  createUser(@Body() user: CreateUser): string {    //Con @Body hacemos que se detecte lo que le estamos mandando por body desde el request.
    console.log(user.name);                         //Usamos los DTO para indicarle que datos va a recibir en este caso: user.
    return 'Creating an user...';                   //Definimos esos datos en otra carpeta y archivo, y luego los importamos y utilizamos. 
  }

  @Put('/usuario/:id')                              //En el caso de actualizar, necesitaríamos dos elementos, el id del elemento a actualiza y el body con la nueva data.
  updatingUser(@Body() user: CreateUser, @Param('id') id) {            
    return 'Updating an user...';
  }

  @Delete('/usuario/:id')                           //Definimos un params dinámico
  deletingUser(@Param('id') id) {                   //Le indicamos el nombre del param y le pasamos por parámetro el param como string
    console.log(id)
    return `Deleting an user ${id}`;
  }
}
