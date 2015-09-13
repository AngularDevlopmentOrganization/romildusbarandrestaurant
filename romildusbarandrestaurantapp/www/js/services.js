
angular.module('starter').service('RestService', function($http){

  //chamar serviço aqui.
  var places = [];
  
                 for(place = 0; place < 10; place++){
                   places[place] = {name: "A Porteira",
                                  telefone: "81 3426 2220",
                                  endereco: "R Doutor JosÃ© Maria 804 lj A â€“ Encruzilhada â€“ Recife",
                                  especialidade: "Especialidade"};
                 }

  return{
    bares: function(){
      //$http.get("http://www.w3schools.com/angular/customers.php")
      //.success(function(response){
        //console.log(response.records);
      //});
      return places;

    }
  }

});
