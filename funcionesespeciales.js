
var carro = {
    color: "Blanco",
    marca: "Nissan",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}
var carro2 = {
    color: "Azul",
    marca: "Nissan"
}

console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
    console.log("Corro: ", this.imprimir() );
    console.log("Argumentos: ", arg1, arg2)
    console.log("========================")
}

// Con bind podemos establecer a que objeto hace referencia el this
var logModeloCorre = logCarro.bind( carro );

logModeloCorre("abc","xyz")

// El call hace lo mismo que el this, solo que con call espera dos parametros
// El objeto al que apunta y el otro las variables que espera el objeto
// En caso de no saber cuantos argumentos son se pude enviar un arreglo []
logModeloCorre.call(carro,"123","456")

// Funciones prestadas
console.log(carro.imprimir.call( carro2 ))



