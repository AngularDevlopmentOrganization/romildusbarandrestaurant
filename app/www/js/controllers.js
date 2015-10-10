angular.module('starter')
.controller('restBarCtrl', function($scope,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate){
//ionicMaterialMotion.ripple();

//$scope.places = RestService.bares();


$scope.toggleLeft = function(){
  $ionicSideMenuDelegate.toggleLeft();
}

ionicMaterialInk.displayEffect();
ionicMaterialMotion.ripple();

}).controller('sideMenuController', function(){

});
