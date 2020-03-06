
var http  = require('http');
var server = http.createServer();
//request请求事件处理函数，需要接收两个参数
//request请求对象
//  请求对象可以用来获取客户端的一些请求信息，例如请求路径
//request响应对象
//   响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    //http://127.0.0.1:3000/
    //http://127.0.0.1:3000/ff
    console.log('收到客户端的请求了,请求录径是：'+request.url);
    
    //response对象有一个write方法：write方法可以用来给你客户端发送响应数据
    //write可以使用多次，但是最后一定要使用end来结束响应，否者客户端等待

    response.write('hello');
    response.write('nodejs');

    //告诉客户，我的话说完了，你可以呈递给用户了
    response.end();

});

//4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000来访问 ');
})