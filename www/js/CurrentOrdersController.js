angular.module('myapp.CurrentOrdersController', ['ionic'])


.controller('CurrentOrdersCtrl', function($scope, $ionicModal, $ionicPopup) {
  $scope.saveAt = 'grocery-bear0008'

  $scope.saved = localStorage.getItem( $scope.saveAt);
  $scope.todos = (localStorage.getItem( $scope.saveAt) !== null) ? JSON.parse($scope.saved) : [{
        orderNum: 0,
        order: []
      }, {
        orderNum: 1,
        order: []
      }];
  localStorage.setItem( $scope.saveAt, JSON.stringify($scope.todos));

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false
    });
    $scope.todoText = ''; //clear the input after adding
    localStorage.setItem( $scope.saveAt, JSON.stringify($scope.todos));
  };

  /*Delete Funtion*/
  $scope.archive = function() {

    var latch = false;
    var oldTodos = $scope.todos;

    angular.forEach(oldTodos, function(todo) {
      if (todo.done) {
        latch = true;
        //alert("latch open");
      }
    });

    //alert($scope.todos.length);
    if (latch) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          $scope.todos = [];

          angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
              $scope.todos.push(todo);
          });
          localStorage.setItem( $scope.saveAt, JSON.stringify($scope.todos));
        } else {

        }
      });
    } else {

      var alertPopup = $ionicPopup.alert({
        title: 'Nothing Selected!',
        template: 'Please select an item.'
      });
      alertPopup.then(function(res) {});

    }

  }

  /*end Delete*/

});