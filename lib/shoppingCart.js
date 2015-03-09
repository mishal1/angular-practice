function ShoppingCart(){
  this.items = [];
  this.totalPrice = 0;
}

ShoppingCart.prototype.add = function(name, stock) {
  this.findItem(name, stock);
};

ShoppingCart.prototype.remove = function(name, stock) {
  var index = this.items.indexOf(stock[name]);
  this.decreaseTotalPrice(index);
  this.items.splice(index, 1);
  stock.increase(name);
};

ShoppingCart.prototype.increaseTotalPrice = function(item) {
  this.totalPrice += item.price;
};

ShoppingCart.prototype.decreaseTotalPrice = function(index) {
  this.totalPrice -= this.items[index].price;
};

ShoppingCart.prototype.checkStock = function(item, name, stock) {
  if(item.quantity > 0)
    this.addItem(item, name, stock);
};

ShoppingCart.prototype.findItem = function(name, stock) {
  var item = stock[name];
  if(item)
    this.checkStock(item, name, stock); 
};

ShoppingCart.prototype.addItem = function(item, name, stock) {
  this.items.push(item);
  this.increaseTotalPrice(item);
  stock.decrease(name);
};

module.exports = ShoppingCart;