function ShoppingCart(price){
  this.items = [];
  this.price = price;
}

ShoppingCart.prototype.add = function(name, stock) {
  this.findItem(name, stock);
};

ShoppingCart.prototype.remove = function(name, stock) {
  var index = this.items.indexOf(stock[name]);
  this.items.splice(index, 1);
  stock.increase(name);
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
  stock.decrease(name);
};

ShoppingCart.prototype.totalPrice = function() {
  return this.price.total(this.items);
};

ShoppingCart.prototype.addVoucher = function(code, voucherList) {
  this.price.applyVoucher(code, voucherList);
};

module.exports = ShoppingCart;