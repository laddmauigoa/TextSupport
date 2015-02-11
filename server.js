var express = require('express');
var bodyParser = require('body-parser')
var Firebase = require("firebase");
var twilio = require('twilio')('AC6fed270eef9d913b951650f5c980dd91','560b028404f0bc8fd1e9d0604c71b17b')
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//app.use(Firebase)

var myFirebaseRef = new Firebase("https://laddstextsupport.firebaseio.com/");





app.post('/api/support/messages', function(req, res) {

twilio.sendMessage({

    to: req.body.to, // Any number Twilio can deliver to
    from: '+13852194588', // A number you bought from Twilio and can use for outbound communication
    body: req.body.message // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }

})

res.status(200).json('it worked')
})

//     myFirebaseRef.push('$id', function(req) {
	
// })


app.listen(8888)