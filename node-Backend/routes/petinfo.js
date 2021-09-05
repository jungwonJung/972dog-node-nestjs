const express= require('express');
const router = express.Router();
var mysql = require('mysql');
// var ejs = require('ejs');
var app = express();

// app.set('view engine', 'ejs');
// app.set('views', './views/')

var connection = mysql.createConnection({  // 데이터베이스 연동폼 , 
    host : "localhost",
    user: "root",
    password: "99189176",
    database: "database",
    port: "3306",
});


// 나의 반려동물 정보 입력
router.post(('/mypet'), function(req, res, next){
    var name = req.body.name
    var dogname = req.body.dogname
    var necklength = req.body.necklength 
    var chestlength = req.body.chestlength
    var backlength = req.body.backlength
    var bellylength = req.body.bellylength
    var frontleg = req.body.frontleg
    var behindleg = req.body.behindleg
    var datas = [name, dogname, necklength, chestlength, backlength ,bellylength, frontleg, behindleg]
    var sql = "INSERT INTO pet_info (userName, petName, necklength, chestlength, backlength, bellylength, frontleg, behindleg) values(?,?,?,?,?,?,?,?)"

    if(!name || !dogname || !necklength || !chestlength || !backlength || !bellylength || !frontleg || !behindleg)
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


router.post(('/collar'), function(req, res, next) {
    var name = req.body.name
    var dogname = req.body.dogname
    var datas = [ name, dogname ]
    var sql = "SELECT * FROM pet_info LEFT JOIN pet_collar ON pet_info.necklength = pet_collar.necklength WHERE userName = ? AND petName = ?;"
    // var sql = "SELECT * FROM pet_info LEFT outer JOIN hurta_collar ON pet_info.necklength = hurta_collar.necklength;"
    // var sql = "SELECT * FROM pet_info LEFT outer JOIN boondog_collar ON pet_info.necklength = boondog_collar.necklength;"


    if(!name || !dogname)
        return res.status(500).json({message: "모든 항목을 입력해주세요"})

    connection.query(sql, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.render('collar_result' , {results : results})
        }
    })
})

router.post(('/harness'), function(req, res, next) {
    var name = req.body.name
    var dogname = req.body.dogname
    var datas = [ name, dogname ]
    var sql = "SELECT * FROM pet_info LEFT JOIN pet_harness ON pet_info.chestlength = pet_harness.chestlength WHERE userName = ? AND petName = ?;"
    // var sql = "SELECT * FROM pet_info LEFT outer JOIN hurta_collar ON pet_info.necklength = hurta_collar.necklength;"
    // var sql = "SELECT * FROM pet_info LEFT outer JOIN boondog_collar ON pet_info.necklength = boondog_collar.necklength;"


    if(!name || !dogname)
        return res.status(500).json({message: "모든 항목을 입력해주세요"})

    connection.query(sql, datas, function(err, results) {
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.render('harness_result' , {results : results})
        }
    })
})

router.post(('/wear'), function(req, res, next) {
    var name = req.body.name
    var dogname = req.body.dogname
    var datas = [ name, dogname ]
    var sql = "SELECT * FROM pet_info LEFT JOIN pet_wear ON pet_info.chestlength = pet_wear.chestlength WHERE userName = ? AND petName = ?;"
    // var sql = "SELECT * FROM pet_info LEFT outer JOIN hurta_collar ON pet_info.necklength = hurta_collar.necklength;"
    // var sql = "SELECT * FROM pet_info LEFT outer JOIN boondog_collar ON pet_info.necklength = boondog_collar.necklength;"


    if(!name || !dogname)
        return res.status(500).json({message: "모든 항목을 입력해주세요"})

    connection.query(sql, datas, function(err, results){
        if (err) {
            console.log("에러발생", err);
            res.send({
                "code" : 400,
                "실패" : "에러 발생"
            });
        } else {
            console.log('입력완료', results);
            res.render('wear_result' , {results : results})
        }
    })
})




module.exports = router;
