const express= require('express');
const router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "database",
    port: "3306",
});


// 나의 반려동물 정보 입력
router.post(('/mypet'), function(req, res, next){
    var email = req.body.email
    var dogname = req.body.dogname
    var necklength = req.body.necklength 
    var chestlength = req.body.chestlength
    var backlength = req.body.backlength
    var bellylength = req.body.bellylength
    var frontleg = req.body.frontleg
    var behindleg = req.body.behindleg
    var datas = [email, dogname, necklength, chestlength, backlength ,bellylength, frontleg, behindleg]
    var sql = "INSERT INTO pet_info (userEmail, petName, necklength, chestlength, backlength, bellylength, frontleg, behindleg) values(?,?,?,?,?,?,?,?)"

    if(!email || !dogname || !necklength || !chestlength || !backlength || !bellylength || !frontleg || !behindleg)
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
            res.redirect('/petinfo/list')
        }
    })
})

router.post(('/ruffwear_collar'), function(req, res, next) {
    var email = req.body.email
    var dogname = req.body.dogname
    var datas = [ email, dogname ]
    var sql1 = "SELECT * FROM pet_info LEFT outer JOIN ruffwear_collar ON pet_info.necklength = ruffwear_collar.necklength;" ;
    var sql2 = "SELECT * FROM pet_info LEFT outer JOIN hurta_collar ON pet_info.necklength = hurta_collar.necklength;"
    var sql3 = "SELECT * FROM pet_info LEFT outer JOIN boondog_collar ON pet_info.necklength = boondog_collar.necklength;"


    if(!email || !dogname)
        return res.status(500).json({message: "모든 항목을 입력해주세요"})

    connection.query(sql1, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.send({results})
        }
    })





})


module.exports = router;
