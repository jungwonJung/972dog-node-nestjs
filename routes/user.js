const express= require('express');
const router = express.Router();
var mysql = require('mysql');
const { route } = require('.');

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "972-user",
    port:"3306",
});

route.post(('/signup'), function (req, res){
    var 
})



module.exports = router;