const mdb = require('./mdb');

const deleteData = async ()=> {
  let db = await mdb();
  let deleteDataResult = await db.deleteMany();
console.log(deleteDataResult);
};

deleteData();