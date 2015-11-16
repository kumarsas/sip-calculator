var express = require('express');
var app =  express();
var PORT = 3000;


app.use( express.static( __dirname + '/public'));

app.get('/', function( req, res ){
	res.send('Hello SIP Calculator');
});

app.listen(PORT, function(){
	console.log('Express server started on port '+ PORT)
})