// express practices 1st program
const express = require('express');
const  app = express();

app.get('/', (req, res) => {
    res.send('<h1> Welcome</h1><br/><a href ="/chachaji">chacha ji </a><br/><a href ="/dadaji">Dada ji </a>');
});

app.get('/chachaji', (req, res) => {
    res.send('<h1> User data</h1><br/><input type = "text" placeholder = "Bhai Yha Name likho aap apna"/> <br/><input type= "number" placeholder="Bhai yaha app ko apna contact number dalna hoga"/><br/><a href ="#">chahe to isko click krke dekhlo par data submit nhi hoga</a>');
});
app.get('/dadaji', (req, res) => {
    res.send('<h1> User data</h1><br/><input type = "text" placeholder = "Bhai Yha Name likho aap apna"/> <br/><input type= "number" placeholder="Bhai yaha app ko apna contact number dalna hoga"/><br/><a href ="#">chahe to isko click krke dekhlo par data submit nhi hoga</a>');
});
app.listen(800);

// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser