(function () {
  'use strict';
  var x = "hola";
  var aplicacion = angular.module('miPrimeraAplicacion', [])
  aplicacion.controller('miPrimerControlador', function($scope){
    $scope.name = "JuanK";
    $scope.sayHello = function(){
      return $scope.name.length;
    }
  })
})();
