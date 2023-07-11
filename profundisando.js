// Sobre cargar misma funcion, donde una no recibe parametros, en otra 1 y otra 2
// En JavaScript
function crearProducto(nombre, precio){
    nombre = nombre || "Sin nombre";
    precio = precio || 0;
    console.log("Producto: ", nombre, "Precio: ", precio);
}

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

function crearProductoCamisa(precio){
    crearProducto("Camisa", precio)
}

crearProducto("Lapiz");
crearProducto100("Corrector");
crearProductoCamisa(75);

/*
 Polimorfismo, es una funcion que puede recibir diferentes tipos de datos
 */
function determinaDato(a){
    if (a === undefined ){
        console.log("A es undefinied... no se que hacer");
    }

    if ( typeof a === "number"){
        console.log("A es un numero, y puedo hacer operaciones con numeros");
    }

    if ( typeof a === "string" ){
        console.log("A es un texto, puedo hacer operaciones con texto");
    }

    if ( typeof a === "object" ){
        console.log("A es un objeto... pero puede ser cualquier cosa...");

        if ( a instanceof Number ){
            console.log("A es un objeto numerico...");
        }
    }
}

var b = new Number(3);
console.log(b);

determinaDato(b);

// Funciones y sus contexto
function crearFunciones(){
    var arr = [];
    var numero = 1;

    for ( var numero = 1; numero <= 3; numero ++){
        arr.push( 
            (function(numero){
                return function(){
                    console.log(numero)
                }
            })(numero)
        );
    }
    /*
    arr.push( 
        (function(numero){
            return function(){
                console.log(numero)
            }
        })(numero)
    );

    var numero = 3;

    arr.push( function(){
        console.log(numero);
    })

    var numero = 3;

    arr.push( function(){
        console.log(numero);
    })*/

    return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();

// Objetos numero

var a = 10.578785;
console.log(a);
console.log(a.toFixed(5));
console.log(a.toPrecision(2));
var b = new Number("20");
console.log(b);
console.log(b.valueOf())
/*
 Objetos voleanos
 */

var a = false;
//var a = new Boolean();
//console.log(a.valueOf());

if ( a ){
    console.log("Me imprimi")
}
/*
 Objeto string
*/
var b = "Luna";
var a = new String("Alberto Luna");

console.log( a );
console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("e")
console.log("La letra esta en: ", i)

i = a.lastIndexOf("e")
console.log("La letra esta en: ", i)

var nombre = a.substr( 6, 3 );
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

// ==================== funciones viejas de string

document.write(a.italics() )
document.write(a.strike() )

/*
 Objetos Date - tipo fecha
*/
var hoy = new Date();
var fechaMilisegundos = new Date(1);
//var fechaFija = new Date( año, mes, dia, hora, minuto, segundo, milisegundo)
var fechaFija = new Date( 2023, 10, 5, 14, 34, 23, 5)

console.log(hoy);
console.log(fechaMilisegundos);
console.log(fechaFija);

console.log(hoy.getFullYear());
console.log(hoy.getDate());
console.log(hoy.getHours());

var inicio = new Date();

for (var i=0; i < 150; i++){
    console.log("Algo...")
}

var fin = new Date();

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "Milisegundos");

var fecha = new Date(2023, 6, 4);

Date.prototype.sumarDias = function(dias){
    this.setDate( this.getDate() + dias );
    return this;
}

Date.prototype.sumarAnios = function(anios){
    this.setFullYear( this.getFullYear() + anios );
    return this;
}

console.log( fecha );
console.log( fecha.sumarDias(5) );
console.log( fecha.sumarAnios(3) );

/*
Objeto Math
*/

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.456789;

console.log(num1);
console.log( Math.round(num1*100) / 100 );

console.log( Math.floor(num1) ) /** Deja solo el valor entero de un numero */

function randomEntre(min, max){
    return Math.floor( Math.random() * (max-min + 1) + min );
}

console.log( randomEntre(1, 6) );

console.log( Math.sqrt(8) )

console.log( Math.pow(7, 2) )

/**
 * Expresiones regulares
 */

// var reg1 = RegExp("a");
//Expresion regular y detalles
//^ Este simbolo indica que busque en la primera posicion de la palabra
//$ Este inidca que busque al final de la palabra
//. Este indica que que no importa que es o que este en determinada posicion
var reg2 = /^H/;
// En este se indica un rango de numeros 
var reg3 = /[0-9]/; 
// En este se india in rango de caracteres en este caso de a - z
var reg4 = /[a-zA-Z]/; 

var reg5 = /^Ha-z/;
// Con este se indica que busque cualquera que este separado por un texto 
var reg6 = /\s/; 

// Casos como i = insensible, g = todas apariciones, m = multilineas
// Ejemplo /m/i indica que no importa si la m es mayuscula o minuscula
// si tine /[aeiou]|é/ig el simbolo tuberia | es un 'O' logico
// con esta expresion /o{3,4}/g buscamos que sea una letra o y tre o seguidas

var texto = "Hola Mundo, 1234";

var arr = texto.match( /[0-9]/ );
console.log(arr)