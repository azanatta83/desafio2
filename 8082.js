var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello Lynx! 8082 load balancer OPEN!');
});

app.listen(8082, function () {
console.log('app listening on port 8082!');
});
