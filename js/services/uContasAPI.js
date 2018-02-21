angular.module("uConta").service("userAPI", function ($http, config) {
    var headers = {
        headers: {
            "Content-Type": "text/plain"
        }
    }
    this.validarUser = function (usuario) {
        return $http.post(config.baseUrl + "/login/valida", usuario,headers );
    }
}).service("membroAPI", function ($http, config) {
    var headers = {
        headers: {
            "Content-Type": "text/plain"
        }
    }
    this.addUser = function (membro) {
       var x = {
        "id":0,
        "nome":"ua",
        "senha":"senha",
        "email":"ff@r",
        "sexo":"ffff",
        "cpf":"09800571671"
    }
        membro.id=3
        membro.senha="1"
        console.log(membro)
        console.log(JSON.stringify(membro))
        return $http.post(config.baseUrl + "/membros/new", x,headers );
    }
})

