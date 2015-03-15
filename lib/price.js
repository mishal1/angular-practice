function Price(){
  this.voucher = 0;
}

Price.prototype.total = function(items){
  var totalPrice = 0;
  items.forEach(function(item){
    totalPrice += item.price;
  });
  totalPrice -= this.voucher;
  return totalPrice;
};

Price.prototype.applyVoucher = function(code, vouchers) {
  if(vouchers[code]){
    this.voucher = vouchers[code];
  } else {
    return 'Invalid Voucher';
  }
};

module.exports = Price;