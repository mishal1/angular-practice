function ShoppingCart(price){
  this.items = [];
  this.price = price;
  this.price.total(this.items);
}

ShoppingCart.prototype.add = function(name, stock) {
  return this.findItem(name, stock);
};

ShoppingCart.prototype.remove = function(name, stock) {
  var index = this.items.indexOf(stock[name]);
  this.items.splice(index, 1);
  stock[name].quantity += 1;
  this.price.total(this.items);
};

ShoppingCart.prototype.checkStock = function(item, name, stock) {
  if(item.quantity > 0){
    this.addItem(item, name, stock);
  } else {
    return 'Out of stock!';
  }
};

ShoppingCart.prototype.findItem = function(name, stock) {
  var item = stock[name];
  if(item)
    return this.checkStock(item, name, stock); 
};

ShoppingCart.prototype.addItem = function(item, name, stock) {
  this.items.push(item);
  stock[name].quantity -= 1;
  this.price.total(this.items);
};

ShoppingCart.prototype.totalPrice = function() {
  return this.price.total(this.items);
};

ShoppingCart.prototype.addVoucher = function(code, voucherList) {
  this.price.applyVoucher(code, voucherList);
  this.price.total(this.items);
};

module.exports = ShoppingCart;

// check voucher is valid