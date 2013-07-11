var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function (err,buf) {
	if (err) throw err;
console.log(buf);

);



app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
