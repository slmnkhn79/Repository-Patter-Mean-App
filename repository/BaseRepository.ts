import { IRead } from '../interfaces/IRead';
import { IWrite } from '../interfaces/IWrite';
import { Collection, Db, MongoClient, InsertOneWriteOpResult} from 'mongodb'

export abstract class BaseRepository<T> implements IWrite<T>,IRead<T>
{
    public readonly _collection : Collection;

    constructor (dbName:Db, collectionName:string){
        this._collection = dbName.collection(collectionName);
    }
    async create(item: T): Promise<boolean> {
        const result :InsertOneWriteOpResult = await this._collection.insert(item);

        return !!result.result.ok;
    }   
    update(id: import("mongoose").Schema.Types.ObjectId, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: import("mongoose").Schema.Types.ObjectId): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: import("mongoose").Schema.Types.ObjectId): Promise<T> {
        throw new Error("Method not implemented.");
    }

    
}
