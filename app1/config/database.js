const mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 10, //important
    host     : 'localhost',
    user     : 'root',
    password : '2015',
    database : 'creative',
    debug    :  false
});


module.exports =pool;
