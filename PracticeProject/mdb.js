// const express = require('express');
// const app = express();

const {MongoClient}= require("mongodb");

const url ='mongodb://127.0.0.1:27017';
const database = 'tester';
const collection = 'testerData';
const client = new MongoClient(url);

async function dbconect(){
    let data = await client.connect();
    let db =data.db(database);
    return db.collection(collection);
}

// let response = await collectionConnect.find().toArray();
// dbconect().then((response) => {
//     response.find().toArray().then((fech) => {
//         console.log(fech);});
// });


module.exports = dbconect;