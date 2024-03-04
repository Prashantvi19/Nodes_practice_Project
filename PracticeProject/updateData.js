const mdb = require('./mdb');

const updateData = async ()=> {
  let db = await mdb();
  // let results = await db.find({name:'Prashant kumar 6'}).toArray();

  let results = await db.updateMany({name:' Prashant 3'},{$set:{name:'Prashant kumar 6'}});
  // const results = await db.updateOne({name:'Prashant'},{$set:{name:'Prashant kumar 1'}});

  console.log(results);
};
updateData();