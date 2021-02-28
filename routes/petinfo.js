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

router.post(('/mypet'), function(req, res, next){
    var dogname = req.body.dogname
    var necklength = req.body.necklength 
    var backlength = req.body.backlength
    var bellylength = req.body.bellylength
    var frontleg = req.body.frontleg
    var behindleg = req.body.behindleg
    var datas = [dogname, necklength, backlength ,bellylength, frontleg, behindleg]
    var sql = "INSERT INTO pet_info (petName, necklength, backlength, bellylength, frontleg, behindleg) values(?,?,?,?,?,?)"

    connection.query(sql, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.send({
                "code" : 200,
                "성공" : "입력성공"
            })
        }
    })
})



module.exports = router;
