var express = require('express');
var path = require('path');

var app = express();

app.use('/public/',express.static(path.join(__dirname, 'public')));
app.use('/node_modules/',express.static(path.join(__dirname, 'node_modules')));

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'./views/'));

app.get('/',function(req,res){
    res.render('index.html',{
        name:'yingying'
    });
});

app.listen(80,function(err){
    console.log('running...');
})