angular.module('openDataApplication').config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('categorias',{
    url: '/categorias',
    templateUrl: 'view/templates/mainView.html',
    controller: 'mainController'
  })

  $stateProvider.state('bareserestaurante',{
    url: '/bareserestaurante',
    templateUrl: 'view/templates/bareserestaurante.html',
    controller: 'mainController'
  })


$urlRouterProvider.otherwise('/categorias');

});
