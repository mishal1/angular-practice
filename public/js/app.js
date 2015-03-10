var app = angular.module('shop', []);

app.controller('mainCtrl', function($scope, $http){
  $scope.showMenu = function(){
    var menu = document.getElementById('women-menu')
    menu.style.display = 'block'
  }
  $scope.hideMenu = function(){
    var menu = document.getElementById('women-menu')
    menu.style.display = 'none'
  }
});