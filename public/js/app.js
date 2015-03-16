var app = angular.module('shop', []);

app.controller('mainCtrl', function($scope, $http){
  $scope.show = function(item){
    $http.get('mockDatabase/products.json')
      .success(function(product){
        $scope.basket = []
        $scope.list = [];
        $scope.totalPrice = null
        for(var key in product){
          if(product[key].category === item){
            $scope.list.push(product[key]);
          }
        }
      })
      .error(function(error, status, headers, config){
        console.log(error);
      });
  };

  $scope.addToBasket = function(product){
    var item = {product: product};
    $http({
      method:'POST',
      url:'http://localhost:3000/addProduct',
      data: $.param(item),
      transformRequest: false,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
      console.log(data);
    })
    .error(function(error){
      console.log(error)
    });
  };

  $scope.showBasket = function(){
    var hello = {msg: 'hello word!'};
    $http({
      method:'POST',
      url:'http://localhost:3000/showShoppingCart',
      transformRequest: false,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(product){
      $scope.basket = [];
      $scope.list = [];
      console.log(product.items)
      product.items.forEach(function(item){
        $scope.basket.push(item)
      });
      $scope.totalPrice = product.price.totalPrice
    })
    .error(function(error){
      console.log(error);
    });
  };

  $scope.deleteFromBasket = function(product){
    var item = {product: product};
    $http({
      method:'POST',
      url:'http://localhost:3000/deleteProduct',
      data: $.param(item),
      transformRequest: false,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
      $scope.showBasket()
    })
    .error(function(error){
      console.log(error)
    });
  };

});