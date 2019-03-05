import {Schema} from 'mongoose';
export interface IWrite<T>{
    create(item:T):Promise<boolean>;
    update(id:Schema.Types.ObjectId,item:T):Promise<boolean>;
    delete(id:Schema.Types.ObjectId) :Promise<boolean>;
}