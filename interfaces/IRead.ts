import {Schema} from 'mongoose';
import { promises } from 'fs';
export interface IRead<T>{
    find(item:T): Promise<T[]>;
    findById(id:Schema.Types.ObjectId):Promise<T>;
}