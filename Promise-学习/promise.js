var fs = require('fs');

// 在EcmaScript 6 中新增了一个API Promise
// Promise是一个构造函数，不是异步，但函数体里面往往封装一个异步

// console('1');

// 创建Promise容器
// 当Promise容器一旦创建，就执行里面的代码
var p1 = new promise(function (resolve,reject) {
    // console('2');
    fs.readFile('./a.txt', 'utf8', function (err, data) {
        // console('3');
        if (err) {
            //  失败了，承诺容器中的任务失败了
            // console.log(err);
            reject(err);
            // 把容器的Pending状态改为rejected
        } else {
            // 承诺容器中的任务成功了
            // console.log(data);
            resolve(data);
            // 把容器的状态改为Resolved
        }
    });
});

var p2 = new promise(function (resolve,reject) {
    fs.readFile('./b.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

var p3 = new promise(function (resolve,reject) {
    fs.readFile('./c.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

// console('4');

// 当p1成功了 然后（then）做指定的操作
// then方法接收的function就是容器中的resolve函数
// 第二个function就是reject
p1
  .then(function(data){
      console.log(data);
      return p2;
  },function(err){
      console.log(err);
  })
  .then(function(data){
    console.log(data);
      return p3;
  })
  .then(function(data){
      console.log(data);
  })

//   以上是then的链式调用，第一个then的data是p1的resolve（）中的data
//  第二个then是p2的resolve（）中的data
//  以此类推，直到最后