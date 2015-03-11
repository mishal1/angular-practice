describe('homepage', function() {

  var protractor;

  beforeEach(function() {
    browser.get('http://localhost:3000');
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

  it('should click the women button and a category to display items', function(){
    var element = browser.findElement(By.id('women-button')).then(function(element){
      element.click();
      var category_button = browser.findElement(By.id('casualwear'))
      category_button.click().then(function(){
        
      });
    });
  });

});