(function () {
  'use strict';
  var x = "hola";

  var aplicacion = angular.module('DIApp', [])

  /*aplicacion.controller('miPrimerControlador', function($scope){
    $scope.name = "JuanK";
    $scope.sayHello = function(){
      return $scope.name.length;
    }
  })*/

  aplicacion.controller('DIController', DIController);
  function DIController($scope, $filter, $injector){
    $scope.name = "JuanK2";
    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    console.console.log($injector.AnnonateMe(DIController));
  }

  function AnnonateMe(name, job, blah){
    return "Blah!";
  }

  console.log(DIController.toString());
})();
