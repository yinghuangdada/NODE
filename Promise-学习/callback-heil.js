var fs = require('fs');

// 以下代码无法保证回调的顺序
fs.readFile('./a.txt','utf8',function(err,data){
    if(err){
        //抛出异样
        //  1.阻止程序的执行
        //  2.把错误信息打印到控制台
        throw err;
    }
    console.log(data);
});
fs.readFile('./b.txt','utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});
fs.readFile('./c.txt','utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});


//回调地狱
fs.readFile('./a.txt', 'utf8', function (err, data) {
    if (err) {
        //抛出异样
        //  1.阻止程序的执行
        //  2.把错误信息打印到控制台
        throw err;
    }
    console.log(data);
    fs.readFile('./b.txt', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        fs.readFile('./c.txt', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
        });
    });
});

