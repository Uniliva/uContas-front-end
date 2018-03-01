angular.module("uConta").config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: "/view/login.html",
        controller: "loginController"
    })
    .when('/home',{
        templateUrl: "/view/dashboard.html",
        controller: "loginController"

    })    
    .when('/membros',{
        templateUrl: "/view/configuracao/membros.html",
        controller: "membroController"

    })    
    .when('/locais',{
        templateUrl: "/view/configuracao/locais.html",
        controller: "localController"

    })    
    .when('/orcamentos',{
        templateUrl: "/view/configuracao/orcamentos.html",
        controller: "loginController"

    })
    .when('/contas',{
        templateUrl: "/view/contas/conta.html",
        controller: "loginController"

    })
    .when('/historico',{
        templateUrl: "/view/contas/historicoContas.html",
        controller: "loginController"

    })
    .when('/relatorios',{
        templateUrl: "/view/relatorios/relatorios.html",
        controller: "loginController"

    })
    .when('/graficos',{
        templateUrl: "/view/relatorios/graficos.html",
        controller: "loginController"

    })
    .otherwise({
        redirectTo: '/login'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
});