(function () {
  'use strict';
  var x = "hola";

  var aplicacion = angular.module('DIApp', ["LocalStorageModule"])

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
  }

  aplicacion.controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.name = "JuanK";

    $scope.sayMessage = function() {
      return "JuanK ama la salud y se sirve pollo"
    }
  }

  aplicacion.controller("Controller1", Controller1);
  Controller1.$inject = ['$scope'];
  function Controller1($scope){
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

  aplicacion.controller("Controller2", Controller2);
  Controller2.$inject = ['$scope', '$http'];
  function Controller2($scope, $http){
    $scope.posts = [];
    $scope.newPost = {};
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      console.log(data);
      $scope.posts = data;
    })
    .error(function(err){
      console.log(err);
    });

    $scope.addPost = function(){
      $http.post("https://jsonplaceholder.typicode.com/posts", {
        title: $scope.newPost.title,
        body: $scope.newPost.body,
        userId: 1
      })
      .success(function(data, status, headers, config){
        console.log(data);
        $scope.posts.push(data);
        $scope.newPost = {};
      })
      .error(function(error, status, headers, config){
        console.log(error);
      });
    }
  }
  aplicacion.controller("Controller3", Controller3);
  Controller3.$inject = ['$scope', 'localStorageService'];
  function Controller3($scope, localStorageService){
    if(localStorageService.get("angular-todoList")){
      $scope.todo = localStorageService.get("angular-todoList");
    }
    else {
      $scope.todo = [];
    }
    $scope.$watchCollection('todo', function(newValue, oldValue){
      // return $scope.newActv;
      localStorageService.set("angular-todoList", $scope.todo);
    });
    $scope.addActv = function(){
      $scope.todo.push($scope.newActv);
      $scope.newActv = {};
    }
  }
  // aplicacion.controller("Controller3", Controller3);
  // Controller3.$inject = ['$scope', 'localStorageService'];
  // function Controller3($scope, localStorageService){
  //   if(localStorageService.get("angular-todoList")){
  //     $scope.todo = localStorageService.get("angular-todoList");
  //   }
  //   else {
  //     $scope.todo = [];
  //   }
  //   $scope.$watch(function(){
  //     return $scope.newActv;
  //   }, function(newValue, oldValue){
  //     console.log(newValue);
  //     console.log(oldValue);
  //   });
  //   $scope.addActv = function(){
  //     $scope.todo.push($scope.newActv);
  //     $scope.newActv = {};
  //     localStorageService.set("angular-todoList", $scope.todo);
  //   }
  //   $scope.clean = function(){
  //     $scope.todo = [];
  //     localStorageService.set("angular-todoList", $scope.todo);
  //   }
  // }
  // aplicacion.controller("Controller3", function($scope, localStorageService){
  //   $scope.todo = [];
  //   /*
  //   */
  //   $scope.addActv = function(){
  //     $scope.todo.push($scope.newActv);
  //     $scope.newActv = {};
  //   }
  // });
})();

// !function(){"use strict";function n(n,e,o){n.name="JuanK2",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",n]),console.log(n.toString())}();
