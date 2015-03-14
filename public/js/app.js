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
    
  };
  
});