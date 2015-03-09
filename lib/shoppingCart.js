function ShoppingCart(){
  this.items = []
  this.totalPrice = 0
}

ShoppingCart.prototype.add = function(item) {
  this.items.push(item)
  this.increasePrice(item)
};

ShoppingCart.prototype.remove = function(item) {
  var index = this.items.indexOf(item)
  this.decreasePrice(index)
  this.items.splice(index, 1)
};

ShoppingCart.prototype.increasePrice = function(item) {
  this.totalPrice += item.price
};

ShoppingCart.prototype.decreasePrice = function(index) {
  this.totalPrice -= this.items[index].price
};

module.exports = ShoppingCart