const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const testerSchema = new Schema({
name:{type:String},
email:{type:String},
contact:{type:Number}
}
);
// const mdb = mongoose.model('testerData', testerSchema);
// module.exports = mdb; 
module.exports = mongoose.model('testerData', testerSchema); 