const express= require('express');
const router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "972-db",
    port:"3306",
});

router.post



module.exports = router;
