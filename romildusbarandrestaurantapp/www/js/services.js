
angular.module('starter').service('RestService', function($http){

  //chamar serviço aqui.

  return{
    bares: function(){
      $http.get("http://www.w3schools.com/angular/customers.php")
      .success(function(response){
        console.log(response.records);
      });
    }
  }

});
