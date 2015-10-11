// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myapp', ['ionic', 'myapp.MainPageController' , 'myapp.NewOrderController' , 'myapp.CurrentOrdersController' , 'myapp.AddTasksController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router, which uses the concept of states.
  // Learn more here: https://github.com/angular-ui/ui-router.
  // Set up the various states in which the app can be.
  // Each state's controller can be found in controllers.js.
  $stateProvider

  // Set up an abstract state for the tabs directive:
  .state('MainPage', {
    url: '/MainPage',
    // abstract: true,
    templateUrl: 'templates/MainPage.html',
    controller: 'MainPageCtrl'
  })


  .state('NewOrder', {
    url: '/NewOrder',
    // views: {
      // 'NewOrder': {
        templateUrl: 'templates/NewOrder.html',
        controller: 'NewOrderCtrl'
      // }
    // }
  })

  .state('CurrentOrders', {
      url: '/CurrentOrders',
      // views: {
        // 'CurrentOrders': {
          templateUrl: 'templates/CurrentOrders.html',
          controller: 'CurrentOrdersCtrl'
        // }
      // }
    })

  .state('AddTasks', {
      url: '/AddTasks',
      // views: {
        // 'CurrentOrders': {
          templateUrl: 'templates/AddTasks.html',
          controller: 'AddTasksCtrl'
        // }
      // }
    })

  // .state('PastOrders', {
  //   url: '/PastOrders',
  //   views: {
  //     'PastOrders': {
  //       templateUrl: 'templates/PastOrders.html',
  //       controller: 'PastOrdersCtrl'
  //     }
  //   }
  // })

  // .state('Inventory', {
  //   url: '/Inventory',
  //   views: {
  //     'Inventory': {
  //       templateUrl: 'templates/Inventory.html',
  //       controller: 'InventoryCtrl'
  //     }
  //   }
  // })

  // .state('Users', {
  //   url: '/Users',
  //   views: {
  //     'Users': {
  //       templateUrl: 'templates/Users.html',
  //       controller: 'UsersCtrl'
  //     }
  //   }
  // })


  // .state('DeliveryTracker', {
  //   url: '/DeliveryTracker',
  //   views: {
  //     'DeliveryTracker': {
  //       templateUrl: 'templates/DeliveryTracker.html',
  //       controller: 'DeliveryTrackerCtrl'
  //     }
  //   }
  // })


  // If none of the above states are matched, use this as the fallback:
  $urlRouterProvider.otherwise('/MainPage');

})