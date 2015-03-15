var Price = require('../../lib/price.js');

describe('Price', function(){

  var price, cart, vouchers;

  beforeEach(function(){
    price = new Price();
    cart = [{price: 5, quantity: 1}, {price: 1, quantity: 1}];
    vouchers = {'under50': 5.00};
  });

  it('should have a total price of 0 when initialized', function(){
    expect(price.total([])).toEqual(0);
  });

  it('should iterate through items and total the price', function(){
    expect(price.total(cart)).toEqual(6);
  });

  it('have a voucher applied to the total price', function(){
    price.applyVoucher('under50', vouchers);
    expect(price.total(cart)).toEqual(1);
  });

  it('alerts the user if the voucher is invalid', function(){
    expect(price.applyVoucher('FREE', vouchers)).toEqual('Invalid Voucher');
  });

});