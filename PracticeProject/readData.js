
const mdb = require('./mdb');

// let response = await collectionConnect.find().toArray();
const getData = async ()=>{
  let data = await mdb();
  let response = await data.find().toArray();
  console.log(response);
}

getData();