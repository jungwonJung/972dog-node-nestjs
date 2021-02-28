const express= require('express');
const router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "database",
    port:"3306",
});

router.post(('/login'), function(req,res,next){
    var email = req.body.email;
    var password = req.body.password;

    var sql = "SELECT * FROM user WHERE userEmail = ?";

    connection.query(sql, email, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "로그인 실패"
            });
        } else {
            if(results.length > 0) {
                if(results[0].userPw == password, results[0].Admin == 1) {
                    console.log(results)
                } else {
                    res.send({
                        "code" : 204,
                        "실패" : "이메일이나 비밀번호가 다릅거나, 관리자계정이 아닙니다"
                    });
                }
            } else {
                res.send({
                    "code" : 204,
                    "실패" : "이메일이나 비밀번호가 다릅거나, 관리자계정이 아닙니다"
                });
            }
        }
    });
});



module.exports = router;