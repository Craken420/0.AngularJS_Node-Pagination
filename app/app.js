var todos = angular.module('todos', ['ui.bootstrap']);

todos.controller('TodoController', function($scope) {
  /* Paginator */
  $scope.filteredTodos = [],
  $scope.currentPage = 1,
  $scope.numPerPage = 10,
  $scope.maxSize = 5;

  $scope.makeTodos = function() {
    $scope.todos = [];
    for (i=1;i<=20;i++) {
      $scope.todos.push({ text:'todo '+i, done:false});
    }
  };

  $scope.makeMore = function() {
    $scope.todos = [];
    for (i=21;i<=100;i++) {
      $scope.todos.push({ text:'todo '+i, done:false});
    }
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.todos.slice(begin, end);
  });
  
  $scope.init = function() {
    $scope.makeTodos();
  };

  $scope.init();
});

