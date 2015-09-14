angular.module('starter')
.controller('restBarCtrl', function($scope,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,RestService){



$scope.places = RestService.bares();

$scope.toggleLeft = function(){
  $ionicSideMenuDelegate.toggleLeft();
}

//Tempo para os itens da lista serem incluidos no DOM
$timeout(function(){
  ionicMaterialMotion.fadeSlideInRight();
  ionicMaterialInk.displayEffect();
},200);

});
