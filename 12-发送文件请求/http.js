var http = require('http')
var fs = require('fs')

var server=http.createServer()

server.on('request',function(req,res){
    var url = req.url
    if(url==='/index'){
        fs.readFile('./index.html',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain;charaet=utf-8')
                res.end('读取文件失败请稍后')
            }else{
                res.setHeader('Content-Type','text/html;charaet=utf-8')
                res.end(data)
            }
        })
    }else if(url==='./'){
        res.setHeader('Content-Type','text/plain;charaet=utf-8')
        res.end('404 页面不存在')
    }

})

server.listen(80,function(error,data){
    if(error){
        console.log('链接失败')
    }else{
        console.log('runing...')
    }
})