const mdb = require('./mdb');
const express = require('express');
const db = require('mongodb');
const app = express();

app.use(express.json());

app.delete('/:_id', async (req, res)=>{
  let data = await mdb();
  let deletes = await data.deleteOne({_id: new db.ObjectId(req.params._id)});
  // let deletes = req.params.id;
  console.log(deletes);
  res.send(deletes);
})
app.listen(4000);