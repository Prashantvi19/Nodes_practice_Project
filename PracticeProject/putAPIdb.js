const mdb = require('./mdb');
const db = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());

app.put('/:id', async (req, res) =>{
  let data = await mdb();
  let response = await data.updateOne({_id : new db.ObjectId(req.params.id)},{$set:req.body})
  console.log(req.params.id);
  res.send(response);
});
app.listen(4000);