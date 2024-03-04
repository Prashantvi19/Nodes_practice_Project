const express = require('express');
const app = express();

const {MongoClient}= require("mongodb");

const url ='mongodb://127.0.0.1:27017';
const database = 'tester';
const collection = 'testerData';
const client = new MongoClient(url);

async function getData(){
    let data = await client.connect();
    let db =data.db(database);
    let collectionConnect = db.collection(collection);
    let response = await collectionConnect.find({name:'Prahsant Kumar Vishwakarma'}).toArray();

console.log(response);
app.get('/', (req, res) => {
  res.send(response);
});
}
getData();
app.listen(5000, () => {
  console.log('listening on');
  // console.log(response);
});