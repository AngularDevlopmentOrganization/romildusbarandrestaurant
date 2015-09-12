angular.module('starter')
.controller('restBarCtrl', function($scope,ionicMaterialInk,
  ionicMaterialMotion,$timeout,RestService){
//ionicMaterialMotion.ripple();
//ionicMaterialInk.displayEffect();
RestService.bares();

});
