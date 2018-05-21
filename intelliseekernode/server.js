
// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');
 
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({
// //     extended: true
// // }));
 
// const express = require('express');
// const app = express();
// const mysql = require('mysql');

 
// // connection configurations
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'manojdb'
// });
 
// // connect to database
// mc.connect();
// // default route
// app.get('/tasklists', function (req, res) {
//     mc.query('SELECT * FROM tasks', function (error, rows, fields) {
//          res.header("Access-Control-Allow-Origin", "*");
//          res.setHeader('Content-Type', 'application/json');
//         if (error) throw error;
       
//             res.json(rows);
//             console.log(rows);

//     });
//     // let task_id = req.params.expense_id;
 
//     // mc.query('SELECT * FROM expense where expense_id=?', task_id, function (error, results, fields) {
//     //     if (error) throw error;
//     //     return res.send({  data: results[0] });
//     // });
 
// });

// app.get('/postdata', function (req, res) {
//     mc.query('SELECT * FROM t_user', function (error, rows, fields) {
//          res.header("Access-Control-Allow-Origin", "*");
//          res.setHeader('Content-Type', 'application/json');
//         if (error) throw error;
       
//             res.json(rows);
//             console.log(rows);
            

//     });

// });

// app.post('/todo', function (req, res) {
 
//     let task = req.body.task;
 
//     if (!task) {
//         return res.status(400).send({ error:true, message: 'Please provide task' });
//     }
 
//     mc.query("INSERT INTO tasks SET ? ", { task: task }, function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
//     });
// });
 

// // port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
// app.listen(8080, function () {
//     console.log('Node app is running on port 8080');
// });

var mongoose = require('mongoose');
var assert = require('assert');

var Tutorials = require('./schema.js');

var url = "mongodb://localhost:27017/mydb";
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.on('open', function () {
    console.log('connected');
});

var newTopic = Tutorials({
    name: 'manojjs',
    description: 'clientside javascript framework'
});

newTopic.save(function(err) {
    if(err) throw err;

    Tutorials.find({}, function(err, data) {
    if(err) throw err;
    console.log(data); 
    });
});

