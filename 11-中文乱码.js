
var http  = require('http');
var server = http.createServer();

server.on('request',function(request,response){
    var url = request.url
    // response.end('hello 元宵节快乐！');
    if(url==='/plain'){
        response.setHeader('Content-Type','text/plain ; charset=utf-8');
        response.end('hello 元宵节快乐！');
    }else if(url==='/html'){
        response.setHeader('Content-Type','text/html ; charset=utf-8');
        response.end('<p>hello 元宵节快乐！<a>点我</a></p>');
    }
    

});

//4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000来访问 ');
})