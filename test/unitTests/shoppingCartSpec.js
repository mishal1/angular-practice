var ShoppingCart = require('../../lib/shoppingCart.js');

describe('Shopping Cart', function(){

  var cart, shoe, stock, price, vouchers;

  beforeEach(function(){
    price = {
      voucher: 0,
      total: function(items){
        var totalPrice = 0;
        items.forEach(function(item){
          totalPrice += item.price;
        });
        totalPrice -= this.voucher;
        return totalPrice;
      },
      applyVoucher: function(code, vouchers){
        if(vouchers[code]){
          this.voucher = vouchers[code];
        } else {
          return 'Invalid Voucher';
        }
      }
    };
    cart = new ShoppingCart(price);
    shoe = {price: 5, quantity: 1};
    stock = {'shoe': shoe};
    vouchers = {'under50': 5.00};
  });

  it('is empty when initialized', function(){
    expect(cart.items).toEqual([]);
  });

  it('has a total price of 0 when initialized', function(){
    expect(cart.totalPrice()).toEqual(0);
  });

  describe('after an item is added to the shooping cart', function(){

    beforeEach(function(){
      cart.add('shoe', stock);
    });

    it('it can be seen in the cart', function(){
      expect(cart.items).toEqual([shoe]);
    });

    it('the total price changes', function(){
      expect(cart.totalPrice()).toEqual(5);
    });

    it('cannot add an item if it is not in stock anymore', function(){
      expect(cart.add('shoe', stock)).toEqual('Out of stock!');
      expect(cart.items).toEqual([shoe]);
    });

    it('can add a voucher that will decrease total price', function(){
      cart.addVoucher('under50', vouchers);
      expect(cart.totalPrice()).toEqual(0);
    });

    describe('after an item is removed from the cart', function(){

      beforeEach(function(){
        cart.remove('shoe', stock);
      });
      
      it('it can no longer be seen in the cart', function(){
        expect(cart.items).toEqual([]);
      });

      it('the total price decreases', function(){
        expect(cart.totalPrice()).toEqual(0);
      });

      it('the stock increases', function(){
        cart.add('shoe', stock);
        expect(cart.items).toEqual([shoe]);
      });

    });

  });

});