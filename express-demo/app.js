var express = require('express');

//穿件服务器程序
var app = express();

//公开指定目录
// 这样做，可以通过/public/xx 的方式访问public目录中的所有资源
app.use('/public/',express.static('./public/'));
app.use('/static/',express.static('./static/'));

app.get('/', function (req, res) {
    res.send('hello express');
});

app.get('/about', function (req, res) {
    res.send('hello about');
});

app.listen(80, function () {
    console.log('app is running at port 8080.')
});