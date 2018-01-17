angular.module("uConta").config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: "/view/login.html",
        controller: "loginController"
    })
    .otherwise({
        redirectTo: '/login'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
});