// require 是一个方法  用于加载用户自己编写的文件  加载node核心模块
// 相对路径必须加上./
// 可以省略后缀名
// 在node中，没有全局作用域，只有模块作用域
// 外部访问不到内部
// 内部访问不到外部
console.log('a start')
require('./b.js')

console.log('a end')