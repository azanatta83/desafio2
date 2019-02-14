var http = require('http');

var http_proxy = require('http-proxy');
var proxServer = 0;
var servidores = [
    {'url':'http://localhost:8081'},
    {'url':'http://localhost:8082'},
    {'url':'http://localhost:8083'},
    {'url':'http://localhost:8084'}];

var proxy = http_proxy.createProxy();    
        
require('http').createServer(function(req, res) {
  var servidor = servidores[proxServer];  

  proxy.web(req, res, {
    target: servidor.url
  }, function(e) { console.log(e); });
  proxServer = proxServer == 2 ? 0 : proxServer + 1;
}).listen(8080);   
