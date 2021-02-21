const express= require('express');
const router = express.Router();
var mysql = require('mysql');

var userdb = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "972-user",
    port:"3306",
});

var petdb = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "972-pet",
    port:"3306",
});


module.exports = router;
