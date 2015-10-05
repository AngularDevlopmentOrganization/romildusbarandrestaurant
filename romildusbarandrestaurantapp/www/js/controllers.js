angular.module('openDataApplication')
.controller('mainController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,$state,$ionicLoading,
  restService){


    executarLoadIngindicator($scope, $ionicLoading);
    carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion,$ionicLoading);

    $scope.goToCategory = function($local){
      $state.go('application.'+$local);
    }

})


.controller('baresERestaurantesController', function($scope,restService,$timeout,ionicMaterialInk,
  ionicMaterialMotion){

      $scope.count = 0;
      $scope.next = undefined;
      $scope.places = [];

      ionicMaterialInk.displayEffect();

      $scope.loadMore = function(){
        carregarBarERes($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion);
      }

      $scope.moreDataCanBeLoad = function(){
        return $scope.places.length <= $scope.count;
      }

      // $scope.$on('$stateChangeSuccess', function(){
      //   $scope.loadMore();
      // });

})

  function executarLoadIngindicator($scope,$ionicLoading){
    $scope.loadingIndicator = $ionicLoading.show({
      template: '<ion-spinner icon="android"/></p>',
      animation: 'fade-in',
      showBackdrop: false,
      showDelay: 0
    });
  }

   function carregarCategorias($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion,$ionicLoading){
     var categories = restService.obterCategorias();
     categories.then(function(response){
       $scope.categorias = response;
       $scope.loadingIndicator = $ionicLoading.hide();
       aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, 200);
     })
   }

   function carregarBarERes($scope,restService,$timeout,ionicMaterialInk,ionicMaterialMotion){
     var barERelDataModel = restService.obterBareRes($scope.next);

     barERelDataModel.then(function(response){

       if($scope.count == 0){
         $scope.count = response.count;
       }
       carregarLugaresComVelocidade($scope, $timeout, response, 500);
     })
   }

   function carregarLugaresComVelocidade($scope, $timeout, response, velocidade){
     var place = 0;
     carregarLugares($scope, $timeout, response, place, velocidade);
   }

   function carregarLugares($scope, $timeout, response, place, velocidade){
     $timeout(function () {
       $scope.places.push(response.results[place]);
        place++;
       if(place < response.results.length){
         carregarLugares($scope, $timeout, response, place, velocidade);
       }else{
         $scope.next = response.next;
         $scope.$broadcast('scroll.infiniteScrollComplete');
       }
     }, velocidade);
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
