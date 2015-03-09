function ShoppingCart(){
  this.items = []
}

ShoppingCart.prototype.add = function(item) {
  this.items.push(item)
};

ShoppingCart.prototype.remove = function(item) {
  var index = this.items.indexOf(item)
  this.items.splice(index, 1)
};

module.exports = ShoppingCart