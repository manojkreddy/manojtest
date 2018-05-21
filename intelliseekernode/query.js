
var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/mydb", function(err, database) {
  if(err) return console.error(err);

  db = database;

  // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere.
});


router.get("/data", function(req, res, next) {
    db.collection("manojtutorials", function(err, collection){
        collection.find({}).toArray(function(err, data){
                res.json(data);
                
      })
    });
  });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");