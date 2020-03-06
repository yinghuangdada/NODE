var fs = require('fs');
var student = require('./student-mongodb');
//Express专门用来包装路由的
var express = require('express');
// 创建一个路由名称
var router = express.Router();

router.get('/', function (req, res) {
    student.find(function (err, data) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子',
                '雪梨'
            ],
            students: data
        });
    });

});

router.get('/students/new', function (req, res) {
    res.render('new.html');
});

router.post('/students/new', function (req, res) {
    new student(req.body).save(function (err, ret) {
        if (err) {
            console.log(err);
            console.log('保存失败');
        } else {
            console.log('保存成功');
            console.log(ret);
            res.redirect('/');
        }
    });
});

router.get('/students/edit', function (req, res) {
    student.findById(req.query.id, function (err, data) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.render('edit.html', {
            student: data
        });
    });

});
router.post('/students/edit', function (req, res) {
    student.findByIdAndUpdate(req.body.id,req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error');
        }
        console.log('保存成功！');
        res.redirect('/');
    })
});

router.get('/students/delete', function (req, res) {
    student.findByIdAndRemove(req.query.id, function (err,ret) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/');
        console.log('删除成功！');
    })
});
module.exports = router;