var express = require('express');
var bodyparser = require('body-parser');

var app = express();

var comments = [
    {
        name: '张三',
        message: '今天心情不错！',
        dateTime: '2020-2-11'
    },
    {
        name: '张三',
        message: '今天心情不错！',
        dateTime: '2020-2-11'
    },
    {
        name: '张三',
        message: '今天心情不错！',
        dateTime: '2020-2-11'
    },
    {
        name: '张三',
        message: '今天心情不错！',
        dateTime: '2020-2-11'
    },
    {
        name: '张三',
        message: '今天心情不错！',
        dateTime: '2020-2-11'
    }
];


app.use('/public/', express.static('./public/'));

// 配置使用art-template模板引擎
// 第一个参数表示当渲染以.art结尾的文件时，使用art-template模板引擎
// express-art-template是专门用来在Express中把art-template整合到Express中的
// app.engine('art', require('express-art-template'));
app.engine('html', require('express-art-template'));

// Express为Response响应对象提供了render方法
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径，默认会去项目中的views目录中查找
// Express约定，开发人员把所有的视图文件都放到views中

//配置body-parser中间插件（专门用来解析Post请求体）
// parser application/x-www-form-urlencode
app.use(bodyparser.urlencoded({ entended: false }));
app.use(bodyparser.json());

app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    });
});

app.get('/post', function (req, res) {
    res.render('post.html');
});

// app.get('/pinglun',function(req,res){
// var comment = req.query;
// comment.dateTime="2020-2-14-1806";
// comments.unshift(comment);
// res.redirect('/');//重定向
// });

// 当以post 请求/post 的时候，执行指定的处理函数
// 这样可以利用不同的请求方法让一个路径使用多次
app.post('/post', function (req, res) {
    var comment = req.body;
    comment.dateTime="2020-2-14-1806";
    comments.unshift(comment);
    res.redirect('/');//重定向
});

app.get('/admin', function (req, res) {
    res.render('admin/index.html');
});

app.listen(80, function () {
    console.log('running...');
});
