
var i = 1;
/**
 * Primero evalia y luego ejecuta el codigo
 */
/*
while ( i <= 10 ) {

    if ( i=== 5 ){
        continue;
    }

    console.log(i);

    i++;
}*/

/**
 * Ejcuta el codigo primero y luego evalua
 */
/*
do{
    i++;
    console.log(i)
    
}while( i < 10)
*/

/**
 * For normal
 */
/*
for (var i=0; i<10; i++){
    if ( i=== 5 ){
        continue;
    }
    console.log(i)
}
*/

/**
 * For in
 */
/*
var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18
}

var juan = new Persona();

Persona.prototype.direccion = "San Jose";

for (prop in juan) {

    //console.log(juan.hasOwnProperty(prop));

    if ( !juan.hasOwnProperty(prop))
        continue;

    console.log(prop, ":", juan[prop])
}

for (num in [1,2,3,4,5,6,7,8,9]) {
    console.log(num)
}

[1,2,3,4,5,6,7,8,9,10].forEach(function( val ){
    console.log( val );
})
*/

/**
 * For con rutulacion de los simbolos
 */
/*
for_principal: //Esta es la rotulacion
for ( var i = 1; i <= 5; i++){
    console.log("i",i)

    for ( var j = 1; j <= 5; j++){
        console.log("j",j)

        continue for_principal;
    }
}
*/
/**
 * Funciones en tiempo
 */
/*
setTimeout(function(){
    console.log("Paso un segundo")
}, 1000);

var segundos = 0;

var intervalo = setInterval(function(){

    segundos ++;

    console.log("seg", segundos)

    if (segundos === 3){
        clearInterval(intervalo)
    }

}, 1000);
*/

var juan = {
    nombre: "Juan",
    edad: 30,
    imprimir: function(){
        var self = this // Esto se utiliza para obtener el contexto actual
        setTimeout(function(){
            console.log(self.nombre, self.edad)
        },1000);
    }
}

juan.imprimir();