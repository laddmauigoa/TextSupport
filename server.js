var express = require('express');
var bodyParser = require('body-parser')
var Firebase = require("firebase");

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(Firebase)

var myFirebaseRef = Firebase("https://laddstextsupport.firebaseio.com/");


// app.get(myFirebaseRef, function(req, res) {
// 	res.status(200).json(myFirebaseRef)

// })



app.listen(8888)