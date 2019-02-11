var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello Lynx! I am azanatta83');
});

app.listen(3000, function () {
console.log('app listening on port 3000!');
});
