var app = angular.module('shop', []);

app.controller('mainCtrl', function($scope, $http){
  $scope.showMenu = function(){
    var menu = document.getElementById('women-menu')
    menu.style.display = 'block'
  }
  $scope.hideMenu = function(){
    console.log('hover')
    var menu = document.getElementById('women-menu')
    menu.style.display = 'none'
  }
  $scope.show = function(item){
    $http.get('mockDatabase/products.json')
      .success(function(products){
        $scope.list = []
        console.log(item)
        for(var key in products){
          if(products[key].category === item){
            $scope.list.push(products[key])
            console.log($scope.list)
          }
        }
      })
      .error(function(error, status, headers, config){
        console.log('error')
        console.log(error)
      })
  }
});