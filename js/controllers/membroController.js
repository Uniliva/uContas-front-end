angular.module("uConta").controller("membroController", function ($scope, membroAPI, uContasUtil, $location) {
    $scope.msg = [];
    $scope.exibir = false;
    $scope.membro=[];

    $scope.salvar = function () {
        $scope.estaCarregando = true;
        membroAPI.addUser($scope.membro).then(function (result) {
            //delete  $scope.membro;
            console.log(result.data);
            $scope.exibir = true;
            newMsg("success","Info","Membro adicionado com sucesso");
            $scope.estaCarregando = false;
        }).catch(function (erro) {
            newMsg("success","Info","Não foi possivel adicionar o membro");
            //delete  $scope.membro;
            $scope.estaCarregando = false;
        })

    }
    $scope.validaCPF = function () {
        console.log(uContasUtil.validaCPF($scope.membro.cpf));
        if ((!$scope.membro.cpf == "") && (!uContasUtil.validaCPF($scope.membro.cpf)) ){
            newMsg("danger","Erro","CPF inválido!")
                $scope.exibir = true;       
        } else {
            $scope.exibir = false;
        }
    }

    var newMsg = function(tipo,titulo,texto){
        $scope.msg.tipo = tipo;
        $scope.msg.titulo = titulo;
        $scope.msg.texto = texto;  
    }
});