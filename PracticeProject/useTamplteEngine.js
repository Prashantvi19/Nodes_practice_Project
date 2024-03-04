const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
const data = {Name:'Prshant vishwakarma', Email:'prshantvish19@gmail.com',Phone:1234567};

app.get('/profile', (req, res) => {
    res.render('profile',{data});
});

app.listen(600);

