describe('homepage', function() {

  var protractor;

  beforeEach(function() {
    browser.get('http://localhost:3000');
    browser.waitForAngular();
  });

  it('should have title', function() {
    expect(browser.getTitle()).toEqual('Shop');
  });

  it('should display the name of the shop', function(){
    var element = browser.findElement(By.id('name')).then(function(element){
      expect(element.getText()).toEqual('Shopfront');
      expect(element.isDisplayed()).toBe(true);
    });
  });

  it('should have a women button', function(){
    var element = browser.findElement(By.id('women-button')).then(function(element){
      expect(element.getText()).toEqual('Women');
      expect(element.isDisplayed()).toBe(true);
    });
  });

  it('should not display any items if a category has not been clicked', function(){
    element.all(by.id('products')).then(function(items) {
      expect(items.length).toBe(0);
    });
  });

  it('should click the women button and a category to display items', function(){
    var button = browser.findElement(By.id('women-button')).then(function(button){
      button.click();
      var category_button = browser.findElement(By.id('casualwear'));
      category_button.click().then(function(){
        element.all(by.id('products')).then(function(items) {
          expect(items.length).toBe(2);
          expect(items[0].isDisplayed()).toBe(true);
        });
      });
    });
  });

  it('should have nothing in their basket', function(){
    var basket = browser.findElement(By.id('basket')).then(function(button){
      browser.sleep(5000)
      button.click().then(function(){
        var price = browser.findElement(By.id('price')).then(function(price){
          expect(price.getText()).toEqual(0)
        })
      });
    });
  });

});