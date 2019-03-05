const mongoose = require('mongoose');

const Post = mongoose.model('Employee',{
    title:{type:string,require:true},
    category:{type:string,require:true},
    date:{type:date,default:new Date().getDate()},
    author:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}] 
}) 
 module.exports = mongoose.model('Post',Post);