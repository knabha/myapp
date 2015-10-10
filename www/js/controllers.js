angular.module('myapp.controllers', [])


/*
Controller for the discover page
*/
.controller('MainPageCtrl', function($scope , $state) {
     $scope.myTitle = 'Template';

    $scope.doSomething = function() {
      $scope.myTitle = $scope.myTitle + ' something';
    };

    $scope.create = function() {
        $state.go('NewOrder');
    };

})



.controller('NewOrderCtrl', function($scope , $state) {
    $scope.tasks = [
        { title: 'Collect coins'  },
        { title: 'Eat mushrooms' },
        { title: 'Get high enough to grab the flag' },
        { title: 'Find the Princess' }
        ];


    $scope.create = function() {
        $state.go('MainPage');
    };

});