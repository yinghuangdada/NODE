// require方法有俩个作用
// 1.加载文件模块并执行里面的代码
// 2.拿到被加载文件的导出的接口对象 exports
// exports默认是一个空对象

var ret = require('./b')
console.log(ret.foo);