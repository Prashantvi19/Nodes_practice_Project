const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tester');

const Schema = mongoose.Schema;
const testerSchema = new Schema({
  name: { type: String },  // 'Type' should be lowercase 'type'
  email: { type: String }, // 'Type' should be lowercase 'type'
  contact: { type: Number } // 'Type' should be lowercase 'type'
});

const mdb = mongoose.model('testerDatas', testerSchema);

app.post('/api/', async (req, res) => {
  let data = new mdb({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact
  });
  try {
    let results = await data.save();
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
