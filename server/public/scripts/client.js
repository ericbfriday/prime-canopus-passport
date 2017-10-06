var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'LoginController', 
      controllerAs: 'lc'
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: 'LoginController', 
      controllerAs: 'lc'
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: 'UserController',
      controllerAs: 'uc',
      resolve: {
        getUser: function (UserService) {
          UserService.getUser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/shelf.html',
      controller: 'InfoController',
      controllerAs: 'ic'
    })
    .when('/add', {
      templateUrl: '/views/additems.html',
      controller: 'AddController',
      controllerAs: 'ac'
    })
    .otherwise({
      redirectTo: 'home'
    });
});
