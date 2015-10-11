angular.module('myapp.MainPageController', ['ionic'])


/*
Controller for the discover page
*/
.controller('MainPageCtrl', function($scope , $state) {
     $scope.myTitle = 'Template';

    $scope.doSomething = function() {
      $scope.myTitle = $scope.myTitle + ' something';
    };

    $scope.goToPage = function(page) {
        $state.go(page);
    };


});