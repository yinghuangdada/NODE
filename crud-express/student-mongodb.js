var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itcast');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,2],
        default:0
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
});

// 直接导出构造函数
module.exports = mongoose.model('Student',StudentSchema);