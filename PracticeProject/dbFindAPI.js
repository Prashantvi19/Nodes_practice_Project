const mdb = require('./mdb');
const database = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());
app.get('/', async(req, res)=> {  
  let data = await mdb();
  let response = await data.find({_id: new database.ObjectId("64ce4f315d4e933098123d3a")}).toArray();
  console.log(response);
  res.send(response);
});
app.listen(4000);