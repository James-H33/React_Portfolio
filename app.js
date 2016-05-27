var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var portIP = process.env.IP;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello');
})

app.listen(port, portIP, function() {
  console.log('App is listening on port ' + port);
});
