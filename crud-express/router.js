var fs = require('fs');
var student = require('./student');
//Express专门用来包装路由的
var  express = require('express');
// 创建一个路由名称
var router = express.Router();

router.get('/',function(req,res){
    // fs.readFile('./db.json','utf8',function(err,data){
    //     if(err){
    //         return res.status(500).send('Server error');
    //     }
    //     res.render('index.html',{
    //         fruits:[
    //             '苹果',
    //             '香蕉',
    //             '橘子',
    //             '雪梨'
    //         ],
    //         students:JSON.parse(data).students
    //     });
    // });
    student.find(function(err,data){
        if(err){
            return res.status(500).send('Server error');
        }
        res.render('index.html',{
            fruits:[
                '苹果',
                '香蕉',
                '橘子',
                '雪梨'
            ],
            students:data
        });
    });
    
});

router.get('/students/new',function(req,res){
    res.render('new.html');
});

router.post('/students/new',function(req,res){
   student.save(req.body,function(err){
       if(err){
        return res.status(500).send('Server error');
       }
       console.log('保存成功！');
       res.redirect('/');
   })
   console.log(req.body);
});

router.get('/students/edit',function(req,res){
    student.findById(parseInt(req.query.id),function(err,data){
        if(err){
            return res.status(500).send('Server error');
        }
        res.render('edit.html',{
            student:data
        });
    });
    
});
router.post('/students/edit',function(req,res){
    student.updateById(req.body,function(err){
        if(err){
            return res.status(500).send('Server error');
           }
           console.log('保存成功！');
           res.redirect('/');
    })
});

router.get('/students/delete',function(req,res){
    student.deleteById(parseInt(req.query.id),function(err){
        if(err){
            return res.status(500).send('Server error');
        }
        res.redirect('/');
        console.log('删除成功！');
    })
});
module.exports = router;