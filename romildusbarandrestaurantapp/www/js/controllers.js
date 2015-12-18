angular.module('openDataApplication')
    .controller('mainController', function ($scope, $http, ionicMaterialInk,
        ionicMaterialMotion, $ionicSideMenuDelegate, $timeout, $state, $ionicLoading,
        restService) {


        executarLoadingIndicator($scope, $ionicLoading);
        carregarCategorias($scope, restService, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicLoading);

        $scope.goToCategory = function ($local) {
            $state.go('application.' + $local);
        }

    })


.controller('baresERestaurantesController', function ($scope, restService, $timeout, ionicMaterialInk,
    ionicMaterialMotion) {

    $scope.page = 0;
    $scope.pageSize = 5;
    $scope.numeroDeRegistros = 0;
    $scope.places = [];

    ionicMaterialInk.displayEffect();



    $scope.loadMore = function () {
        carregarBarERes($scope, restService, $timeout, ionicMaterialInk, ionicMaterialMotion);
    }

    $scope.moreDataCanBeLoad = function () {      
        return $scope.places.length <= $scope.numeroDeRegistros;
    }

    $scope.GotoLink = function (url) {
        window.open(url, '_system');
    }

    // $scope.$on('$stateChangeSuccess', function(){
    //   $scope.loadMore();
    // });

})

function executarLoadingIndicator($scope, $ionicLoading) {
    $scope.loadingIndicator = $ionicLoading.show({
        template: '<ion-spinner icon="android"/></p>',
        animation: 'fade-in',
        showBackdrop: false,
        showDelay: 0
    });
}

function carregarCategorias($scope, restService, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicLoading) {
    var categories = restService.obterCategorias();
    categories.then(function (response) {
        $scope.categorias = response;
        $scope.loadingIndicator = $ionicLoading.hide();
        aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, 200);
    })
}

function carregarBarERes($scope, restService, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    var barERelDataModel = restService.obterBareRes($scope, $scope.page, $scope.pageSize);
    barERelDataModel.then(function (response) {
        carregarLugaresComVelocidade($scope, $timeout, response, 500);
    })
}

function carregarLugaresComVelocidade($scope, $timeout, response, velocidade) {
    var place = 0;
    carregarLugares($scope, $timeout, response, place, velocidade);
}

function carregarLugares($scope, $timeout, response, place, velocidade) {
    $timeout(function () {

        $scope.places.push(response[place]);
        place++;
        if (place < response.length) {
            carregarLugares($scope, $timeout, response, place, velocidade);
        } else {
            $scope.page += 1;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    }, velocidade);
}

function aplicarEfeitoBlinds($timeout, ionicMaterialInk, ionicMaterialMotion, tempoDeEspera) {
    $timeout(function () {
        ionicMaterialInk.displayEffect();
        ionicMaterialMotion.blinds();
    }, tempoDeEspera);
}

function redirecionar(path) {
    $location.path(path);
};
