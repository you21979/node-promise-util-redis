var Promise = require("bluebird")

var hgetall = exports.hgetall = function(){
    var args = [].slice.apply(arguments);
    var conn = args.shift();
    return new Promise(function(resolve, rejected){
        args.push(function(err, res){
            if(err) rejected(err);
            else resolve(res);
        });
        conn.hgetall.apply(conn, args);
    })
}

var hget = exports.hget = function(){
    var args = [].slice.apply(arguments);
    var conn = args.shift();
    return new Promise(function(resolve, rejected){
        args.push(function(err, res){
            if(err) rejected(err);
            else resolve(res);
        });
        conn.hget.apply(conn, args);
    })
}

var hset = exports.hset = function(){
    var args = [].slice.apply(arguments);
    var conn = args.shift();
    return new Promise(function(resolve, rejected){
        args.push(function(err, res){
            if(err) rejected(err);
            else resolve(res);
        });
        conn.hset.apply(conn, args);
    })
}
