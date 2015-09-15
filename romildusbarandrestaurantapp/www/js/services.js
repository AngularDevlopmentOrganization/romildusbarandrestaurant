
angular.module('openDataApplication').factory('restService', function($http){

  //chamar serviço aqui.

  var places = [];

                 for(place = 0; place < 10; place++){
                   places[place] = {name: "A Porteira",
                                  telefone: "81 3426 2220",
                                  endereco: "R Doutor JosÃ© Maria 804 lj A â€“ Encruzilhada â€“ Recife",
                                  especialidade: "Especialidade"};

                 }



  return{
    categorias: function(){

      var xmlhttp = new XMLHttpRequest();      

      var categorias;
      xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
          categorias = JSON.parse(xmlhttp.response).results;
        }
      }

      xmlhttp.open("GET", url, true);
      xmlhttp.send();

      return categorias;

    }
  }

});
