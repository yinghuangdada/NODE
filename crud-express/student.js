/**
 * student.js
 * 数据操作文件
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

var fs = require('fs');

var dbpath = './db.json';

/**
 * 获取所有学生
 * callback中的参数
 * 第一个是err
 *   成功返回null
 *   错误返回 错误对象
 * 第二个参数 结果
 */
exports.find = function (callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        // JSON.parse(data).students;
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students);
    });
}

exports.findById = function(id,callback){
    fs.readFile(dbpath,'utf8',function(err,data){
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function(item){
            return item.id ===id;
        });
        callback(null, ret);
    });
}

/**
 * 添加学生
 */
exports.save = function (student, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        var fileData = JSON.stringify({
            students: students
        });
        fs.writeFile(dbpath, fileData, function (err) {
            if (err) {
                callback(err);
            }
            callback(null);
        });
    });
}


/**
 * 更新学生
 */
exports.updateById = function (student,callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        student.id = parseInt(student.id);
        var students = JSON.parse(data).students;
        var stu = students.find(function(item){
            return item.id === student.id;
        });
        for(var key in student){
            stu[key] = student[key];
        }
        var fileData = JSON.stringify({
            students: students
        });
        fs.writeFile(dbpath, fileData, function (err) {
            if (err) {
                callback(err);
            }
            callback(null);
        });
    });
 }

/**
 * 删除学生
 */
exports.deleteById = function (id,callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var deleteId = students.findIndex(function(item){
            return item.id === id;
        });
        students.splice(deleteId,1);
        var fileData = JSON.stringify({
            students: students
        });
        fs.writeFile(dbpath, fileData, function (err) {
            if (err) {
                callback(err);
            }
            callback(null);
        });
    });
 }
