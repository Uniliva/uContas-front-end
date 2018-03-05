angular.module("uConta").controller("localController", function ($scope, localAPI) {
    $scope.msg = [];
    $scope.exibir = false;
    $scope.estaCarregando = false;
    $scope.local = {};
    
    $scope.salvaAtualiza = function () {
        if (!$scope.local.id) {
           salvar();
        } else {
            atualizar();
        }
    }

    $scope.editar = function (local) {
        $scope.exibir = false;
        $scope.local = angular.copy(local);
    }

    $scope.remover = function(id){
        localAPI.removeLocal(id).then(function (result) {
            $scope.exibir = true;
            newMsg("success", result.data.status, result.data.msg);
            carregaDados();
        }).catch(function (erro) {
            newMsg("danger", "Error", "Não foi possivel remover o membro");
            $scope.exibir = true;
        });
    }

    var carregaDados = function () {
       
        localAPI.buscaTodos().then(function (result) {
            $scope.locaisCadastrados = result.data;
        }).catch(function (erro) {
            console.log(erro);
        })
    }

    var salvar=function(){
        localAPI.addLocal($scope.local).then(function (result) {
            $scope.exibir = true;
            limpa();
            newMsg("success", result.data.status, result.data.msg);
            $scope.estaCarregando = false;
            carregaDados();
        }).catch(function (erro) {
            newMsg("danger", "Error", "Não foi possivel adicionar o Local");
            limpa();
            $scope.exibir = true;
            $scope.estaCarregando = false;
        });

    }
    var atualizar = function () {      
        $scope.estaCarregando = true;
        localAPI.atualizaLocal($scope.local).then(function (result) {
            console.log(result)
            $scope.exibir = true;
            limpa();
            newMsg("success", result.data.status, result.data.msg);
            $scope.estaCarregando = false;
            carregaDados();
        }).catch(function (erro) {
            newMsg("danger", "Error", "Não foi possivel atualizar o Local!");
            limpa();
            $scope.estaCarregando = false;
        });
    }

    var limpa= function(){
        delete $scope.local
    }
    var newMsg = function (tipo, titulo, texto) {
        $scope.msg.tipo = tipo;
        $scope.msg.titulo = titulo;
        $scope.msg.texto = texto;
    }
    carregaDados();
});