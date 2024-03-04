 const express = require('express');
 const app = express();

 const filter = (req, res, next) =>{
    if(req.query.v == null){
        res.send('No Input')
 }else if(req.query.v == 1){
    res.send("Invalid Input")}
    else if(req.query.v == 'ok' ){
        next();
    }else{
        res.send("try Again"); 
    }
}
app.use(filter);

app.get('/',(req, res)=>{
    res.send('welcome to the home page');
});
app.get('/login',(req, res)=>{
    res.send('this is Login page');
});
app.get('*',(req, res)=>{
    res.send('404');
});
app.listen(500);