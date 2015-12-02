var express = require("express");
var logfmt = require("logfmt");
var app = express();
var fs = require("fs"); 
var yaml = require('js-yaml');
 
// Get document, or throw exception on error 
try {
  var doc = yaml.safeLoad(fs.readFileSync('example.yml', 'utf8'));
  console.log(doc.product[0].sku);
} catch (e) {
  console.log(e);
}

app.all('/display/:data', function(req, res) {
  res.send(doc.product[req.param('data')].sku);
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});