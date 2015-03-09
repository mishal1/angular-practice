function ShoppingCart(){
  this.items = [];
  this.totalPrice = 0;
}

ShoppingCart.prototype.add = function(name, stock) {
  this.findItem(name, stock);
};

ShoppingCart.prototype.remove = function(item) {
  var index = this.items.indexOf(item);
  this.decreaseTotalPrice(index);
  this.items.splice(index, 1);
};

ShoppingCart.prototype.increaseTotalPrice = function(item) {
  this.totalPrice += item.price;
};

ShoppingCart.prototype.decreaseTotalPrice = function(index) {
  this.totalPrice -= this.items[index].price;
};

ShoppingCart.prototype.checkStock = function(item, name, stock) {
  if(item.quantity > 0){
    this.items.push(item);
    this.increaseTotalPrice(item);
    this.decreaseStock(name, stock);
  }
};

ShoppingCart.prototype.decreaseStock = function(name, stock) {
  stock[name].quantity -= 1;
};

ShoppingCart.prototype.findItem = function(name, stock) {
  var item = stock[name];
  if(item)
    this.checkStock(item, name, stock); 
};

module.exports = ShoppingCart;

// add stock prototype methods similar to mongoose schema methods