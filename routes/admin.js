const express= require('express');
const router = express.Router();
var mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "database",
    port:"3306",
    multipleStatements: true // 다중쿼리를 ';' 기준으로
});

router.post(('/login'), function(req,res,next){
    var email = req.body.email;
    var password = req.body.password;

    var sql = "SELECT * FROM user WHERE userEmail = ?";

    if(!email || !password)
        return res.status(500).json({message: "모든 항목을입력주세요"})

    connection.query(sql, email, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "로그인 실패"
            });
        } else {
            if(results.length > 0) {
                if(!bcrypt.compareSync(password, results[0].userPw), results[0].Admin == 1) {
                    console.log(results)
                    res.redirect('/admin/list')
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

router.post(('/collar'), function(req, res, next){
    var brand = req.body.brand
    var necklength = req.body.necklength 
    var size = req.body.size

    var datas = [brand, necklength, size]
    var sql = "INSERT INTO pet_collar (brand, necklength, size) values(?,?,?)"

    if(!brand || !necklength || !size)
        return res.status(500).json({message: "모든 항목을입력주세요"})

    connection.query(sql, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.redirect('/admin/collar')
        }
    })
})

router.post(('/harness'), function(req, res, next){
    var brand = req.body.brand
    var chestlength = req.body.chestlength 
    var size = req.body.size
    var kg = req.body.kg

    var datas = [brand, chestlength, size, kg]
    var sql = "INSERT INTO pet_collar (brand, chestlength, size, kg) values(?,?,?,?)"

    if(!brand || !chestlength || !size || !kg)
        return res.status(500).json({message: "모든 항목을입력주세요"})

    connection.query(sql, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.redirect('/admin/harness')
        }
    })
})

router.post(('/wear'), function(req, res, next){
    var brand = req.body.brand
    var chestlength = req.body.chestlength
    var backlength = req.body.backlength
    var necklength = req.body.necklength
    var size = req.body.size

    var datas = [brand, chestlength, size, backlength, necklength]
    var sql = "INSERT INTO pet_collar (brand, chestlength, size, backlength, necklength) values(?,?,?,?,?)"

    if(!brand || !chestlength || !size || !backlength || !necklength)
        return res.status(500).json({message: "모든 항목을입력주세요"})

    connection.query(sql, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.redirect('/admin/wear')
        }
    })
})

module.exports = router;