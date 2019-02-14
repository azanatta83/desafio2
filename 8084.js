var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello Lynx! 8084 load balancer OPEN!');
});

app.listen(8084, function () {
console.log('app listening on port 8084!');
});
