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
  DIController.$inyect = ['$scope', '$filter'];
  function DIController($scope, $filter, $injector){
    $scope.name = "JuanK2";
    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
    //console.console.log($injector.AnnonateMe(DIController));
  }

  aplicacion.controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.name = "JuanK";

    $scope.sayMessage = function() {
      return "JuanK ama la salud y se sirve pollo"
    }
  }

  aplicacion.controller("FirstController", FirstController);
  FirstController.$inject = ['$scope'];
  function FirstController($scope){
    $scope.nombre = "JuanK";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
      {
        comentario: "Buen Tutorial",
        userName: "Codigo Facilito"
      },
      {
        comentario: "Malisimo Tutorial",
        userName: "JuanK"
      }
    ];
    $scope.agregarComentario = function(){
      $scope.comentarios.push($scope.nuevoComentario);
      $scope.nuevoComentario = {};
    }
  }

  aplicacion.controller("FirstController2", FirstController2);
  FirstController2.$inject = ['$scope', '$http'];
  function FirstController2($scope, $http){
    $scope.posts = [];
    var respuesta = $http.get("https://jsonplaceholder.typicode.com/users");
    respuesta.success(DescargaCorrecta)
    respuesta.error(DescargaErrada);

    function DescargaCorrecta(data){
      console.log(data);
      $scope.posts = data;
    }
    function DescargaErrada(err){}

    // $scope.addPost = function(){
    //   $http.post("");
    // }
  }


  function AnnonateMe(name, job, blah){
    return "Blah!";
  }

  console.log(DIController.toString());
})();

// !function(){"use strict";function n(n,e,o){n.name="JuanK2",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",n]),console.log(n.toString())}();
