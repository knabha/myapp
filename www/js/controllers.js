angular.module('myapp.controllers', [])


/*
Controller for the discover page
*/
.controller('MainPageCtrl', function($scope) {


})


/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope, User) {
  // get the list of our favorites from the user service
  	$scope.favorites = User.favorites;
	$scope.username = User.username;
    
    $scope.removeSong = function(song, index) {
    User.removeSongFromFavorites(song, index);
  }
})



/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope, $window, User, Recommendations) {
  // expose the number of new favorites to the scope
  $scope.favCount = User.favoriteCount;

	// method to reset new favorites to 0 when we click the fav tab
	$scope.enteringFavorites = function() {
		User.newFavorites = 0;
		// Recommendations.haltAudio();
	}

	$scope.logout = function() {
		User.destroySession();

		// instead of using $state.go, we're going to redirect.
		// reason: we need to ensure views aren't cached.
		$window.location.href = 'index.html';
	}

})


.controller('SplashCtrl', function($scope, $state, User) {

  // attempt to signup/login via User.auth
  $scope.submitForm = function(username, signingUp) {
    User.auth(username, signingUp).then(function(){
      // session is now set, so lets redirect to discover page
      $state.go('tab.discover');

    }, function() {
      // error handling here
      alert('Hmm... try another username.');

    });
  }

});