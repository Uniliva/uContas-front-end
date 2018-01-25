angular.module("uConta").controller("loginController", function ($scope,userAPI,$location) {
       $scope.logar = function () {
        userAPI.validarUser($scope.user).then(function(result){
            var userConsultado = result.data;
            console.log(userConsultado)
            if(userConsultado.isValido){
                $location.path("/dashboard");
            }else{
                $scope.user.invalido = true;
            }


        }).catch(function(erro){
            console.log("deu merda"+ erro.status)
        })
    }
}
);