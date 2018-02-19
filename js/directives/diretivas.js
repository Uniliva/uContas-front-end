angular.module("uConta").directive("alerta", function(){
return{
    templateUrl:"/view/diretivas/alerta.html",
    replace:true,
    restrict:"E",
    scope:{
        titulo:"@",
        messagem:"@",
        tipo:"@"
    }
}
})