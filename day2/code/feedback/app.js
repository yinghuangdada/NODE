// application 应用程序
// 为了统一处理静资源，放到public里面

var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');

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

var server = http.createServer();

server.on('request', function (req, res) {
    //加true为了讲query 转换成对象
    var parseObj = url.parse(req.url, true);
    var pathname = parseObj.pathname;

    if (pathname === '/') {
        fs.readFile('./view/index.html', function (err, data) {
            if (err) {
                res.end('404 Not Found.');
            } else {
                var teplateTr = template.render(data.toString(), {
                    comments: comments
                });
                res.end(teplateTr);
            }
        });
    } else if (pathname === '/post') {
        fs.readFile('./view/post.html', function (err, data) {
            if (err) {
                res.end('404 Not Found.');
            } else {
                res.end(data);
            }
        });

    } else if (pathname.indexOf('/public/') === 0) {
        //统一处理/public/开头的
        // 直接把请求路径当做文件路径进行读取
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                res.end('404 Not Found.');
            } else {
                res.end(data);
            }
        });
    }
    else if (pathname === '/pinglun') {
        // datetime  = new Date();
        var com = parseObj.query;
        com.dateTime = '2020-2-11 22:33'
        comments.push(com);
        // 如何设置服务器让客户端重定向
        //  1.状态码302临时重定向 statusCode
        //  2.通过location重定向
        //  客户端收到服务器响应的状态码302会自动去响应头中找location重定向
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    else {
        fs.readFile('./view/404.html', function (err, data) {
            if (err) {
                res.end('404 Not Found.');
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(80, function () {
    console.log('running...');
});