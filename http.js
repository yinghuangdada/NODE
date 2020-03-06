//使用node构建有一个人web服务器
//在node中专门提供了一个人核心模块：http
//http这个模块的职责就是帮助创建编写服务器的
//1.加载http核心模块
var http  = require('http');

//2.使用http.createServer()方法创建，返回Server实例

var server = http.createServer();

//3.服务器要干什么
//提供服务 ： 对 数据的服务
//发请求
//接收请求
//处理请求
//给反馈（发送响应）
//注册request请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数
server.on('request',function(){
    console.log('收到客户端的请求了');
});

//4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000来访问 ');
})