var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
	  $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
app.run(function ($rootScope, $location, $templateCache) {

});


app.config(['$httpProvider', function ($httpProvider)
{
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {'Content-Type' : 'application/json'};
  $httpProvider.defaults.headers.put = {'Content-Type' : 'application/json'};
  $httpProvider.defaults.headers.patch = {};
}]);
