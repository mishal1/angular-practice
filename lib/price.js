function Price(){
  this.voucher = 0;
  this.totalPrice = 0;
}

Price.prototype.total = function(items){
  var total = 0;
  items.forEach(function(item){
    total += item.price;
  });
  this.totalPrice = total;
  this.totalPrice -= this.voucher;
  return this.totalPrice;
};

Price.prototype.applyVoucher = function(code, vouchers) {
  if(vouchers[code]){
    this.voucher = vouchers[code];
  } else {
    return 'Invalid Voucher';
  }
};

module.exports = Price;