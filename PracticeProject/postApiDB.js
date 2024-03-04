const mdb = require('./mdb');
const database = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());
app.post('/', async(req, res)=>{  
  let data = await mdb();
  let response = await data.insertMany(req.body);
  console.log(req.body);
  // res.send(req.body);
  res.send(response);  
});
app.listen(4000);