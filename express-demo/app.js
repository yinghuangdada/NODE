var express = require('express');
var app = express();

// view engine setup engine方法可以修改文件后缀
// app.engine('art', require('express-art-template'));
app.engine('html', require('express-art-template'));

app.set('view', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
//set方法可以修改默认访问视图的文件夹，默认访问views 但可以修改为html命名的文件夹
app.set('view engine', 'art');

// routes
app.get('/', function (req, res) {
    console.log('express-art-template')
    res.render('index.html', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});

app.listen(3000,function(){
    console.log('running...');
})
