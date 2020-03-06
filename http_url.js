var  http = require('http')

//1.创建server
var server = http.createServer()

//2.监听request请求事件，设置请求参数
server.on('request',function(req,res){
    //console.log('收到请求了，请求路径是：'+req.url)
    //res.write('hello')//一般不用这种方式
    //res.end('hello world');

    var url = req.url;
    // res.end(url);
    if(url==='/products'){
        var products=[
            {
                name:'小皮',
                price:10000
            },
            {
                name:'脆皮狗',
                price:1000
            },
            {
                name:'臭皮皮',
                price:100000
            }
        ]
        res.end(JSON.stringify(products));
    }
})


//3.绑定端口号，启动服务
server.listen('80',function(){
    console.log('服务器已启动')
});