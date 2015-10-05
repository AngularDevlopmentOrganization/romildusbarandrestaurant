
angular.module('openDataApplication',['ionic','ionic-material']).factory('restService', function($http){

  //chamar serviço aqui.


  return{
    obterCategorias: function(){
      var url = "http://luanoliveira1992.pythonanywhere.com/categoria/?format=json";
      var categorias = [];
      return $http.get(url).then(function(response){
        return response.data.results;
      },function(response){
        alert('error ao consultar as categorias!');
      });

  },

    obterBareRes: function(next){

      var url = "";

      if(next == undefined){
        url = "http://luanoliveira1992.pythonanywhere.com/bareres/?format=json";
      }else{
        url = next;        
      }

      var bareserestaurantes = [];
      return $http.get(url).then(function(response){
        return response.data;
      },function(response){
        alert('error ao consultar bares e restaurantes!');
      });

    }
  }



});
