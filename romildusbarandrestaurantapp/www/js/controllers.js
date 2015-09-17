angular.module('openDataApplication')
.controller('mainController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,$state,restService){

    carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion);

    $scope.goToCategory = function(){
      $state.go('application.bareserestaurantes');
    }

})


.controller('baresERestaurantesController', function($scope,$stateParams,ionicMaterialInk){

  $scope.$on("$ionicView.afterEnter", function(){
    ionicMaterialInk.displayEffect();
    $scope.places = [{nome: 'bar 1'}, {nome: 'restaurante 1'}];
  });



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

  function redirecionar(path) {
    $location.path( path );
};
