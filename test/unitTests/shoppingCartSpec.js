var ShoppingCart = require('../../lib/shoppingCart.js')

describe('Shopping Cart', function(){

  var cart, shoe

  beforeEach(function(){
    cart = new ShoppingCart()
    shoe = jasmine.createSpy('shoe');
    shoe.price = 2
  });

  it('is empty when initialized', function(){
    expect(cart.items).toEqual([])
  });

  it('has a total price of 0 when initialized', function(){
    expect(cart.totalPrice).toEqual(0)
  });

  describe('after an item is added to the shooping cart', function(){

    beforeEach(function(){
      cart.add(shoe)
    });

    it('it can be seen in the cart', function(){
      expect(cart.items).toEqual([shoe])
    });

    it('it can be removed', function(){
      cart.remove(shoe)
      expect(cart.items).toEqual([])
    });

    it('the total price changes', function(){
      expect(cart.totalPrice).toEqual(2)
    });

    it('the total price decreases after an item is removed from the cart', function(){
      cart.remove(shoe)
      expect(cart.totalPrice).toEqual(0)
    });

  });

});