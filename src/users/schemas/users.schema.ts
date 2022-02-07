import { Schema } from 'mongoose';              //Importamos schema desde la biblioteca de mongoose.

export const UserSchema = new Schema({       //Creo la tabla (schema) de usuario, con sus respectivos valores, NO COLOCO ID porque Mongoose lo genera solo.
    name: String,                            //A este schema lo tengo que requerido DONDE lo utilizo. En este caso, user.schema.ts
    surname: String,                        //Aquí SOLO SE CREA EL SCHEMA, el nombre lo colocaremos en el módulo.
    age: Number
});