var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
  res.redirect('/calc.html');
});

app.get('/index.html', function(req,res){
  res.redirect('/calc.html');
});


var server = app.listen(8000, function(){
  console.log("AAAAND we're up.");
});


