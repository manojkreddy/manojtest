var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  // if (err) throw err;
  // console.log("Database created!");
  // db.close();
 assert.equal(err,null);
 console.log("Database connected!....");

 var collection = db.collection('manojtutorials');
 collection.insert({name:"Emberjs", description:"side javascript framework"},
 function(err,result) {
   assert.equal(err,null);
   console.log("inserted......");
 });

 collection.find({}).toArray(function(err,docs) {
   if(err) throw err;
  assert.equal(err,null);
  console.log("found........");
  console.log(docs);
 });
});