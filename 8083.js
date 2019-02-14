var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello Lynx! 8083 load balancer OPEN!');
});

app.listen(8083, function () {
console.log('app listening on port 8083!');
});
