var ShoppingCart = require('../../lib/shoppingCart.js')

describe('Shopping Cart', function(){

  var cart, shoe

  beforeEach(function(){
    cart = new ShoppingCart()
    shoe = jasmine.createSpy('shoe');
  });

  it('is empty when initialized', function(){
    expect(cart.items).toEqual([])
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

  });

});