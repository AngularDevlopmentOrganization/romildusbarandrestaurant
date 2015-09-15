angular.module('openDataApplication')
.controller('mainController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,restService){

    carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion);

})

   function carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion){
     var categories = restService.obterCategorias();
     categories.then(function(response){
       $scope.categorias = response;
       aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, 200);
     })
   }

   function aplicarEfeitoBlinds($timeout,ionicMaterialInk,ionicMaterialMotion, tempoDeEspera){
     $timeout(function () {
       ionicMaterialInk.displayEffect();
       ionicMaterialMotion.blinds();
     }, tempoDeEspera);
   }
