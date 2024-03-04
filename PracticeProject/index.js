const express = require('express');
require('./config');
const mdb = require('./models');

const app = express();
app.use(express.json());



app.post('/api/', async (req, res) => {
  let data = new mdb(req.body);
  // let data = new mdb({name:req.body.name,
  //   email:req.body.email,
  //   contact:req.body.contact}
  //   );

    // try {
    //   let results = await data.save();
    //   res.send(results);
    // } catch (error) {
    //   res.status(500).send(error);
    // }
  let results = await data.save();  
  res.send(results);
})

app.put('/api/:_id', async(req, res)=>{

  let updates = await mdb.updateOne(req.params, {$set : req.body})
  const data = [req.params._id,req.body,updates];
  res.send(data);
});

app.get('/api/:_id', async(req, res) => {
  let data = await mdb.find(); 
  // let data2 = await mdb.find(req.params);
  const data1 = [req.params._id,req.body,data];
  res.send(data1);
});
app.delete('/api/:_id', async(req, res) => {
    let data = await mdb.deleteOne(req.params);
    // let data2 = await mdb.deleteMany();
    const data1 = [req.params._id,req.body,data];

    res.send(data1);
  });
app.listen(4000);