var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app= express();
app.use(morgan('combined'));

app.get('/',function(req,res){
    res.sendfile(path.join(__dirname,'ui','index.html'));
});

app.get('/article-one',function(req,res){
    res.sendfile(path.join(__dirname,'ui','article-one.html'));
});

app.get('/article-two',function(req,res){
    res.sendfile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendfile(path.join(__dirname,'ui','article-three.html'));
});

app.get('/ui/style.css',function(req,res){
    res.sendfile(path.join(_dirname,'ui','style.css'));
});

app.get('/article-three',function(req,res){
    res.sendfile(path.join(_dirname,'ui','madi.png'));
});

  var port=8080;
  app.listen(8080,function(){
  console.log('IMAD course app listening on port ${port}!');    
});