var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var filename = fs.readFileSync('index.html');

var bufname = buffer.toString(filename);

app.get('/', function(request, response) {
  response.send(bufname);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
