var app = angular.module('shop', []);

app.controller('mainCtrl', function($scope, $http){
  $scope.show = function(item){
    $http.get('mockDatabase/products.json')
      .success(function(products){
        $scope.list = [];
        for(var key in products){
          if(products[key].category === item){
            $scope.list.push(products[key]);
          }
        }
      })
      .error(function(error, status, headers, config){
        console.log(error);
      });
  };

  $scope.showBasket = function(){
    console.log('basket')
    $http.post('http://localhost:3000/shoppingCart')
      .success(function(data){
        console.log(data)
      })
      .error(function(error){
        console.log(error)
      })
  };

  $scope.addToBasket = function(product){
    console.log(product)
  };

});