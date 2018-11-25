var express = require("express");

var app = express();

var serveStatic = require("serve-static");
app.use(serveStatic('views/'))

app.set('view engine', 'ejs');

app.get('/' , function(req,res){
    
    res.render('home');
    
});


app.post('/formspree.io/test@gmail.com' , function(req,res) {
        
      
        
    });

app.listen(80);
    
    
   