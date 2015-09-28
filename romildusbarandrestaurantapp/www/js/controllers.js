angular.module('openDataApplication')
.controller('mainController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,$state,restService){

    carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion);

    $scope.goToCategory = function($local){
      $state.go('application.'+$local);
    }

})


.controller('baresERestaurantesController', function($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion){

    $scope.$on("$ionicView.afterEnter", function(){
      ionicMaterialInk.displayEffect();
        carregarBarERes($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion);
    });



})


   function carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion){
     var categories = restService.obterCategorias();
     categories.then(function(response){
       $scope.categorias = response;
       aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, 200);
     })
   }

   function carregarBarERes($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion){
     var barERelDataModel = restService.obterBareRes();
     barERelDataModel.then(function(response){
       $scope.places = response.results;
       $scope.dataModel = barERelDataModel;
       aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, 200);
     })
   }

   function aplicarEfeitoBlinds($timeout,ionicMaterialInk,ionicMaterialMotion, tempoDeEspera){
     $timeout(function () {
       ionicMaterialInk.displayEffect();
       ionicMaterialMotion.blinds();
     }, tempoDeEspera);
   }

  function redirecionar(path) {
    $location.path( path );
};
