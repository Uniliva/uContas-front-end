angular.module("uConta")
.service("userAPI", function ($http, config) {
    var headers = {
        headers: {            
            "Content-Type": "text/plain"
        }
    }
    this.validarUser = function (usuario) {
        return $http.post(config.baseUrl + "/login/valida", usuario,headers );
    }
})
.service("membroAPI", function ($http, config) {
    var headers = {
        headers: {
            "Content-Type": "text/plain"
        }
    }

    this.addUser = function (membro) {
        membro.id=0;
        return $http.post(config.baseUrl + "/membros/new", membro,headers );
    }

    this.buscaTodos = function () {
        return $http.get(config.baseUrl + "/membros/all");
    }

    this.atualizaUser = function (membro) {
        return $http.post(config.baseUrl + "/membros/update", membro,headers );
    }
    
    this.removeUser = function (id) {
        return $http.get(config.baseUrl + "/membros/remove/"+id);
    }
    
})

.service("localAPI", function ($http, config) {
    var headers = {
        headers: {
            "Content-Type": "text/plain"
        }
    }

    this.addLocal = function (local) {
        return $http.post(config.baseUrl + "/locais/new", local,headers );
    }

    this.buscaTodos = function () {
        return $http.get(config.baseUrl + "/locais/all");
    }

    this.atualizaLocal = function (local) {
        return $http.post(config.baseUrl + "/locais/update", local,headers );
    }
    
    this.removeLocal = function (id) {
        return $http.get(config.baseUrl + "/locais/remove/"+id);
    }
    
})

