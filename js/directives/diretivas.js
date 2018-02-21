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
}).directive("alertaTexto", function(){
    return{ 
        template:'<span class="alerta" ng-transclude> </span>'   ,    
        replace:true,
        restrict:"E",
        transclude: true

    }
    })