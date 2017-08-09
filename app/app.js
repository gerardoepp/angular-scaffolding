var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.when('/home', {
            title: 'Home',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })

		    .otherwise({
		        redirectTo: '/home'
		    });
  }])
.run(function ($rootScope, $location, Data,  $templateCache) {

});

app.config(function ($httpProvider)
{
    $httpProvider.interceptors.push('AuthInterceptor');
});

app.config(['$httpProvider', function ($httpProvider)
{
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {'Content-Type' : 'application/json'};
  $httpProvider.defaults.headers.put = {'Content-Type' : 'application/json'};
  $httpProvider.defaults.headers.patch = {};
}]);
