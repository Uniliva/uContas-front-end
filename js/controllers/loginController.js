angular.module("uConta").controller("loginController", function ($scope, userAPI, $location) {
    $scope.logar = function () {
        $scope.estaCarregando = true;
        userAPI.validarUser($scope.user).then(function (result) {
            var userConsultado = result.data;
            if (userConsultado.isValido) {
                $location.path("/home");
            } else {
                $scope.user.msg = "Usuario ou senha invalidos!";
                $scope.estaCarregando = false;
            }
        }).catch(function (erro) {
            $scope.user.msg = "Ocorreu um erro! Não foi possivel realizar o login!";
            $scope.estaCarregando = false;
        })
    }
}
);