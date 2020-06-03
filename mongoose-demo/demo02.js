var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//1.链接数据库
mongoose.connect('mongodb://localhost/itcast');

//2.设计集合（表）结构
// 字段名称就是表结构中的属性名字
// 约束的目的是为了保证数据的完整性，不要有脏数据
// var blogschema = new Schema({
//     title:String,
//     author:String,
//     body:String,
//     comments:[{body:String,data:Date}],
//     data:{type:Date,default:Date.now},
//     hidden:Boolean,
//     meta:{
//         votes:Number,
//         favs:Number
//     }
// });

var userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
});

// 3.将文档结果发布为模型
// mongoose.model方法就是用来将一个架构发布为model
// 第一个参数：传入一个大写名词单数字符串用来表示数据库名称
// mongoose会自动将大写名词的字符串生成 小写负数 的集合名称
// 例如 User ：users
// 第二个参数：架构Schema
// 返回值：模型构造函数
var User = mongoose.model('User', userSchema);

// 4.对users集合的数据做增、删、改、查操作

// 4.1新增
// var admin = new User({
//     username:'00222',
//     password:'123456',
//     email:'admin@admin.com'
// });

// admin.save(function(err,ret){
//     if(err){
//         console.log('保存失败');
//     }else{
//         console.log('保存成功');
//         console.log(ret);
//     }
// });

// 4.2 查询
// 查询全部
// User.find(function (err, ret) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log('查询成功');
//         console.log(ret);
//     }
// });

// 条件查询
// User.find({username:'00222'},function (err, ret) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log('查询成功');
//         console.log(ret);
//     }
// });
// User.findOne({username:'00222'},function (err, ret) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log('查询成功');
//         console.log(ret);
//     }
// });

// 4.3删除数据

// User.remove({
//     username: '00222'
// }, function (err, ret) {
//     if (err) {
//         console.log('删除失败');
//     } else {
//         console.log('删除成功');
//         console.log(ret);
//     }
// });

// 4.4更新数据
User.findByIdAndUpdate('5e4e9f8d786da227b02a287f', {
    password: '123'
}, function (err, ret) {
    if (err) {
        console.log('更新失败');
    } else {
        console.log('更新成功');
        console.log(ret);
    }
});
// 更新所有