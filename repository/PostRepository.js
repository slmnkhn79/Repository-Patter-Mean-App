var repository = function(dbContext){

    var get = function(id,callback){
        callback();
    },
    var list = function(callback){
        callback();
    }
    var save = function(callback){
        callback();
    },
    var del = function(id,callback){
        callback();
    }
    return {
        get:get,
        list:list,
        save:save,
        del:del
    }
}
module.exports = repository();