const mdb = require('./mdb');
const insertData = async () => {
  const dbConect = await mdb();
  const insert = await dbConect.insertMany([{ name:' Prashant Vishwakarma 4',email: 'prsh@prshant.com' , contact:1234567},
  { name:' Prashant 7',email: 'prsh@prshant.com' , contact:1234567},
  { name:' Prashant 8',email: 'prsh@prshant.com' , contact:1234567},
  { name:' Prashant 9',email: 'prsh@prshant.com' , contact:1234567}]);

console.log(insert);
};
insertData();