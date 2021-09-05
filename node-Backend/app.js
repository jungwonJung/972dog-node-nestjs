var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyparser = require('body-parser');
var mysql = require('mysql')


app.set('view engine', 'ejs');
app.set('views', './views/')


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

//routes
var indexRouter = require('./routes/index')
var userRouter = require('./routes/user')
var petRouter = require('./routes/petinfo')
var adminRouter = require('./routes/admin')


app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/petinfo', petRouter)
app.use('/admin', adminRouter)



app.listen(3000, function(){
    console.log('서버시작')
})