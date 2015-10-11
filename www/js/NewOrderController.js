angular.module('myapp.NewOrderController', ['ionic'])

.controller('NewOrderCtrl', function($scope , $state ,$ionicModal, $ionicPopup) {

    $scope.tab = 1

    $scope.goToPage = function(page) {
        $state.go(page);
    };

    $scope.selectTab = function(setTab){
        $scope.tab = setTab;
        // $scope.tasks = $scope.tasks.push({ title: 'Find the Princess' })
    };

    $scope.isSelected = function(checkTab){
        return $scope.tab === checkTab;
    }

  $scope.buttonImg = ["../img/falafel.png","../img/shawarma.jpg","../img/fatosh.jpg","../img/vegi_plater.JPG","../img/vegi_plater.JPG","../img/vegi_plater.JPG"]

  $scope.saved = localStorage.getItem('grocery-bear0065');
  $scope.todos = (localStorage.getItem('grocery-bear0065') !== null) ? JSON.parse($scope.saved) : [{
    text: 'DrumSticks',
    ing: "Fool",
    price: 500,
    image: "../img/falafel.jpg",
    done: false 
  }, {
    text: 'CornBread',
    ing: "hmmm",
    price: 500,
    image: "../img/falafel.jpg",
    done: false
  }, {
    text: 'Peach Schnapps',
    ing: "nothing",
    price: 500,
    image: "../img/falafel.jpg",
    done: false
  }, {
    text: 'Carrots',
    ing: "kizeebbb",
    price: 500,
    image: "../img/falafel.jpg",
    done: false
  }];
  localStorage.setItem('grocery-bear0065', JSON.stringify($scope.todos));

  $scope.addTodo = function(order, ingredient, p,img) {
    $scope.todos.push({
      text: order,
      ing: ingredient,
      price: p,
      image: img,
      done: false
    });
    $scope.todoText = ''; //clear the input after adding
    localStorage.setItem('grocery-bear0065', JSON.stringify($scope.todos));
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
          localStorage.setItem('grocery-bear0065', JSON.stringify($scope.todos));
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

  /*Delete Funtion*/
  $scope.selectAll = function() {
      for (i = 0; i < $scope.todos.length; i++) { 
          $scope.todos[i].done = true;
      }
  }

});