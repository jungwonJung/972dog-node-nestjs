const express= require('express');
const router = express.Router();
var mysql = require('mysql2');
const { route } = require('.');

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "972-db",
    port:"3306",
});

router.post(('/signup'), function (req, res){
    var users = {
        "userEmail" : req.body.email,
        "userName" : req.body.name,
        "userPw" : req.body.password,
    }
    connection.query(' INSERT INTO 972-user SET ?', users, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            })
        } else {
            console.log('가입완료', results);
            res.send({
                "code" : 200,
                "성공" : "가입완료"
            })
        }
    })
})



module.exports = router;