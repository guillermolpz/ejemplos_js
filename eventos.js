
function evento( arg ){
    console.log("Me disparé")
    console.log(arg)
}


var objeto = document.getElementById("objDemo");

objeto.addEventListener("keypress", evento);

var objeto2 = document.getElementById("objDemo2");

objeto2.addEventListener("click", evento);
/*
document.onmousedown = function(arg){
    alert("Click bloqueado");
    console.log(arg)
}*/

document.onmouseup = function(){
    var texto = window.getSelection().toString;
    console.log(texto)
}

function validar (){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;

    if (nombre.length < 1){
        return false
    }

    if (apellido.length < 1){
        return false
    }

    return true
}

/**
 * Cajas de dialogo
 */

//alert("Hola mundo");

//var acepto = confirm("Esta seguro desea borrarlo");
//console.log(acepto);

//var nombre = prompt("Ingres su nombre", "nombre");
//console.log(nombre);

/**
 * Modo estricto
 */
// Es se tiene que colocar al inicio del js para todo el archivo
//"use strict"; 

/**
 * El modo estricto se puede utilizar en una funcion especifica al inicio de la 
 * funcion
 */
/*
function getNombre(){
    "use strict"
}
*/