var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyparser = require('body-parser');
var mysql = require('mysql')

app.set('view engine', 'ejs');
app.set('views', '/views/')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.listen(3000, function(){
    console.log('server start!')
})