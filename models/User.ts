// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var userSchema = Schema({
//     _id:Schema.Types.ObjectId,
//     name:{type:String,require:true},
//     createdAt : {type:Date,default:new Date().getDate()}
// })
export class User {
    private name:string;
    private createdAt : Date;

    constructor (name:string){
            this.name = name;
            this.createdAt = new Date();
    }

}