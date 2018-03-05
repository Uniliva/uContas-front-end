angular.module("uConta").controller("membroController", function ($scope, membroAPI, uContasUtil) {
    $scope.msg = [];
    $scope.membro = {};
    $scope.cpfInvalido = false;

    $scope.validaSenha = function () {
        if ($scope.senha1 !== $scope.senha2) {
            return true;
        }
        return false;
    };

    $scope.validaCPF = function () {
        if ((!$scope.membro.cpf == "") && (!uContasUtil.validaCPF($scope.membro.cpf))) {
            $scope.cpfInvalido = true;
        } else {
            $scope.cpfInvalido = false;
        }
    }

    $scope.editar = function (membro) {
        $scope.exibir = false;
        $scope.membro = angular.copy(membro);
        $scope.senha1 = membro.senha;
        $scope.senha2 = membro.senha;
    }

    $scope.salvaAtualiza = function () {
        if (estaCadastrado($scope.membro.cpf)) {
            atualizar();
        } else {
            salvar();
        }
    }
 
    $scope.remover = function(id){
        membroAPI.removeUser(id).then(function (result) {
            $scope.exibir = true;
            newMsg("success", result.data.status, result.data.msg);
            carregaDados();
        }).catch(function (erro) {
            newMsg("danger", "Error", "Não foi possivel remover o membro");
            $scope.exibir = true;
        });
    }
    $scope.limpar = function(id){
        limpa();

    }
    var newMsg = function (tipo, titulo, texto) {
        $scope.msg.tipo = tipo;
        $scope.msg.titulo = titulo;
        $scope.msg.texto = texto;
    }

    var estaCadastrado = function (cpf) {
        var x = $scope.MembrosCadastrados.map(x => x.cpf).indexOf(cpf);
        if (x > -1) {
            return true;
        }
        return false;
    }

    var carregaDados = function () {
        membroAPI.buscaTodos().then(function (result) {
            $scope.MembrosCadastrados = result.data;
        }).catch(function (erro) {
            console.log(erro);
        })
    }

    var limpa = function () {
        delete $scope.membro;
        delete $scope.senha1;
        delete $scope.senha2;
    }
    
    var salvar = function () {
        $scope.membro.senha = $scope.senha1;
        $scope.estaCarregando = true;
        membroAPI.addUser($scope.membro).then(function (result) {
            $scope.exibir = true;
            limpa();
            newMsg("success", result.data.status, result.data.msg);
            $scope.estaCarregando = false;
            carregaDados();
        }).catch(function (erro) {
            newMsg("danger", "Error", "Não foi possivel adicionar o membro");
            limpa();
            $scope.estaCarregando = false;
        });
    }

    var atualizar = function () {
        $scope.membro.senha = $scope.senha1;
        $scope.estaCarregando = true;
        membroAPI.atualizaUser($scope.membro).then(function (result) {
            $scope.exibir = true;
            limpa();
            newMsg("success", result.data.status, result.data.msg);
            $scope.estaCarregando = false;
            carregaDados();
        }).catch(function (erro) {
            newMsg("danger", "Error", "Não foi possivel atualizar o membro!");
            limpa();
            $scope.estaCarregando = false;
        });
    }
    carregaDados();
});