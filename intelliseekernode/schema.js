var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;

var tutorialschema = new Schema({

    name: {
        type:String,
        require:true
    },
    description: {
        type:String,
        required:true
    } 
});

var Tutorials = mongoose.model('manojtutorials', tutorialschema);
module.exports = Tutorials;