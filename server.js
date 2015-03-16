var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var ShoppingCart = require('./lib/shoppingCart')
var Price = require('./lib/price')
var util = require('util');
var stock = require('./public/mockDatabase/products.json')
var voucherList = require('./public/mockDatabase/vouchers.json')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

var price = new Price();
var shoppingCart = new ShoppingCart(price);

app.get('/', function(request, response){
  response.render('index')
});

app.post('/addProduct', function(request, response){
  shoppingCart.add(request.body.product.name, stock)
  response.send(shoppingCart)
});

app.post('/deleteProduct', function(request, response){
  shoppingCart.remove(request.body.product.name, stock)
  response.send(shoppingCart)
});

app.post('/showShoppingCart', function(request, response){
  response.send(shoppingCart)
});

app.post('/addVoucher', function(request, response){
  console.log('hello')
  console.log(shoppingCart)
  shoppingCart.addVoucher(request.body.voucher, voucherList)
  console.log(shoppingCart)
  response.send(shoppingCart)
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;