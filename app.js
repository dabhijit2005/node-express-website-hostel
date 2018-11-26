var express = require("express");

var app = express();

var serveStatic = require("serve-static");
app.use(serveStatic('views/'))

app.set('view engine', 'ejs');

app.get('/home' , function(req,res){
    
    res.render('home');
    
});


app.post('/formspree.io/pranitdubey@gmail.com' , function(req,res) {
        
      
        
    });

app.listen(process.env.PORT , process.env.IP , function(req,res){
    
    console.log('server has started');
});
    
    
   