var ShoppingCart = require('../../lib/shoppingCart.js');

describe('Shopping Cart', function(){

  var cart, shoe, stock, mockStock;

  beforeEach(function(){
    cart = new ShoppingCart();
    shoe = {price: 2, quantity: 1};
    mockStock = { items: function(){
        return {'shoe': shoe};
      },
      decreaseStock: function(name){
        return this.items().item.quantity -= 1;
      }
    };
    stock = mockStock.items();
  });

  it('is empty when initialized', function(){
    expect(cart.items).toEqual([]);
  });

  it('has a total price of 0 when initialized', function(){
    expect(cart.totalPrice).toEqual(0);
  });

  describe('after an item is added to the shooping cart', function(){

    beforeEach(function(){
      cart.add('shoe', stock);
    });

    it('it can be seen in the cart', function(){
      expect(cart.items).toEqual([shoe]);
    });

    it('the total price changes', function(){
      expect(cart.totalPrice).toEqual(2);
    });

    it('cannot add an item if it is not in stock anymore', function(){
      cart.add('shoe', stock);
      expect(cart.items).toEqual([shoe]);
    });

    describe('after an item is removed from the cart', function(){

      beforeEach(function(){
        cart.remove(shoe);
      });
      
      it('it can no longer be seen in the cart', function(){
        expect(cart.items).toEqual([]);
      });

      it('the total price decreases', function(){
        expect(cart.totalPrice).toEqual(0);
      });

      it('the stock ', function(){});

    });

  });

});