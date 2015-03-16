var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var ShoppingCart = require('./lib/shoppingCart')
var Price = require('./lib/price')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var price = new Price();
var shoppingCart = new ShoppingCart(price);

app.get('/', function(request, response){
  response.render('index')
});

app.post('/shoppingCart', function(request, response){
  response.send(shoppingCart)
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;