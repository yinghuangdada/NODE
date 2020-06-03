var express = require ('express');
var bodyParser = require('body-parser')
var router = require('./router');

var app = express();

app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));

// 配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
app.engine('html',require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 把路由挂载到app服务
app.use(router);


app.listen(3000,function(){
    console.log('running...');
});

module.exports = app;