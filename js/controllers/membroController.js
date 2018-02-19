angular.module("uConta").controller("membroController", function ($scope, userAPI, $location) {
   
    $scope.salvar = function(){
        console.log($scope.membroForm);
    }
});