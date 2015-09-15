angular.module('openDataApplication')
.controller('mainController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,restService){


    var url = "http://luanoliveira1992.pythonanywhere.com/bareres/?format=json";

      $http.get(url).then(function(response){
      $scope.categorias = response.data.results;

        $timeout(function(){
          ionicMaterialMotion.blinds();
          ionicMaterialInk.displayEffect();
        },200);

      },function(response){

      });



$scope.toggleLeft = function(){
  $ionicSideMenuDelegate.toggleLeft();
}

//Tempo para os itens da lista serem incluidos no DOM


})


.controller('categoriasController', function($scope, ionicMaterialInk,
   ionicMaterialMotion, restService){



   });
