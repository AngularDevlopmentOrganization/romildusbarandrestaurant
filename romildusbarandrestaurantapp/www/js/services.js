
angular.module('openDataApplication').factory('restService', function($http){

  //chamar serviço aqui.


  return{
    obterCategorias: function(index){
      var url = "http://luanoliveira1992.pythonanywhere.com/categoria/?format=json";
      var categorias = [];
      return $http.get(url).then(function(response){        
        return response.data.results;
      },function(response){
        alert('error ao consultar as categorias!');
      });

    }
  }

});
