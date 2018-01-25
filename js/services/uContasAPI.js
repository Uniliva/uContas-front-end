angular.module("uConta").service("userAPI",function($http,config){

    this.validarUser= function(usuario){
        return $http.post(config.baseUrl + "/login/valida",usuario);
        
    }
})

