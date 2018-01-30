angular.module("uConta").service("userAPI", function ($http, config) {
    var headers = {
        headers: {
            "Content-Type": "text/plain"
        }
    }
    this.validarUser = function (usuario) {
        return $http.post(config.baseUrl + "/login/valida", usuario,headers );

    }
})

