const express= require('express');
const router = express.Router();
var mysql = require('mysql');
const { route } = require('.');

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "database",
    port:"3306",
});

router.post(('/signup'), function (req, res){
    var today = new Date();
    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;
    var created = today
    var modified = today
    var datas = [email, name, password, created, modified] 
    var sql = "INSERT INTO user (userEmail, userName, userPw, created, modified, isActive) values(?,?,?,?,?,0)" 

    connection.query(sql, datas, function(err, results){
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