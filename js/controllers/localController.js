angular.module("uConta").controller("localController", function ($scope, localAPI) {
    $scope.msg = [];
    $scope.exibir = false;
    $scope.estaCarregando = false;
    $scope.local = {};
    
    $scope.salvaAtualiza = function () {
        if (true) {
           salvar();
        } else {
            //atualizar();
        }
    }

    

    var salvar=function(){
        console.log($scope.local)
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

    var limpa= function(){
        delete $scope.local
    }
    var newMsg = function (tipo, titulo, texto) {
        $scope.msg.tipo = tipo;
        $scope.msg.titulo = titulo;
        $scope.msg.texto = texto;
    }
 
});