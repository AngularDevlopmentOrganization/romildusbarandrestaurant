angular.module('openDataApplication').config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('categorias',{
    url: '/categorias',
    templateUrl: 'view/templates/mainView.html',
    controller: 'mainController'
  })


$urlRouterProvider.otherwise('/categorias');

});
