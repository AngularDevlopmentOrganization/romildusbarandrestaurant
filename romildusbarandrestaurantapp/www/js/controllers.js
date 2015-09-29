angular.module('openDataApplication')
.controller('mainController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,$state,$ionicLoading,
  restService){

    $scope.loadingIndicator = $ionicLoading.show({
      template: '<ion-spinner icon="android"/></p>',
      animation: 'fade-in',
      showBackdrop: false,
      showDelay: 0
    });

    carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion,$ionicLoading);

    $scope.goToCategory = function($local){
      $state.go('application.'+$local);
    }

})


.controller('baresERestaurantesController', function($scope,restService,$timeout,ionicMaterialInk,
  ionicMaterialMotion,$ionicLoading){

      $scope.loadingIndicator = $ionicLoading.show({
        template: '<ion-spinner icon="android"/></p>',
        animation: 'fade-in',
        showBackdrop: false,
        showDelay: 0
      });

      ionicMaterialInk.displayEffect();
      carregarBarERes($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion,$ionicLoading);


})


   function carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion,$ionicLoading){
     var categories = restService.obterCategorias();
     categories.then(function(response){       
       $scope.categorias = response;
       $scope.loadingIndicator = $ionicLoading.hide();
       aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, 200);
     })
   }

   function carregarBarERes($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion,$ionicLoading){
     var barERelDataModel = restService.obterBareRes();
     barERelDataModel.then(function(response){
       $scope.places = response.results;
       $scope.dataModel = barERelDataModel;
       $scope.loadingIndicator = $ionicLoading.hide();
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
