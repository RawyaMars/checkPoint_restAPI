const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const personSchema= new Schema({
    fullName:String,
    age:Number,
    favFood:String,
});
// var Person = mongoose.model('Person', personSchema);

// Person.create({
//     fullName: "Joe",
//     age: 24,
//     favFood: 'Apple'
//   },function(err,result){
//       //code to manage error or result if Successful
//   });
// Person.save(function(err, data){
//     if (err){
//       return done(err);
//     }
//     return done(null, data);
//   });

module.exports = mongoose.model("Person",personSchema);
