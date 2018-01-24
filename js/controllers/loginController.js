angular.module("uConta").controller("loginController", function ($scope,userAPI,$location) {
       $scope.logar = function () {
        userAPI.validarUser($scope.user).then(function(result){
            var user = result.data;
            if(user.isValido){
                $location.path("/dashboard");
            }else{
                $scope.user.invalido = true;
            }


        }).catch(function(erro){
            console.log("deu merda"+ erro)
        })
    }
}
);