angular.module('openDataApplication').config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('application',{
    url: '/application',
    templateUrl: 'view/templates/mainView.html',
    abstract: true,
    controller: 'mainController'
  })

  .state('application.categorias',{
    url: '/categorias',
    views: {
      'menuContent': {
        templateUrl: 'view/templates/categorias.html',
        controller: 'mainController'
      }
    }

  })


  .state('application.bareres',{
    url:'/bareres',
    views: {
      'menuContent': {
        templateUrl: 'view/templates/bareserestaurantesview.html',
        controller: 'baresERestaurantesController'
      }
    }
  })




$urlRouterProvider.otherwise('/application/categorias');

});
