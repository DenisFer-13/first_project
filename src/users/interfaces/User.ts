import { Document } from 'mongoose';

export interface User extends Document {            //Acá indicamos que User extiende (hereda) de Document.
    id?: number;                                    //Con el signo de pregunta le digo que puede estar o no esta propiedad. 
    name: string;
    surname: string;
    age: number;
}