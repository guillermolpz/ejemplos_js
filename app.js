function imprimir(){
    for (var i=0; i<80; i++){
        console.log("imprimio")
    }
}

imprimir();

function obtenerAleatorio(){
    return Math.random();
}

function obtenerNombre(){
    return "Alberto"
}

function esMayor05(){
    if (obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false;
    }
}

if (esMayor05()){
    console.log("Es mayo a 0.5")
}else{
    console.log("Es menor a 0.5")
}

function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

/*var persona = crearPersona("Alberto", "Luna")

function crearFuncion(){
    return function(nombre){
        console.log("Me creo" + " " + nombre)
    }
}

var nuevaFuncion = crearFuncion();

nuevaFuncion(persona.nombre);

function a(){
    console.log("Funcion a");
}

a();*/
/*
var nombre = "Juan"
var persona = {
    nombre: "Alberto",
    apellido: "Luna",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion:{
        pais: "Costa Rica",
        obtenerPais: function(){
            var self = this;

            var nuevaDireccion = function(){
                console.log(self);
                console.log("La direccion es: " + self.pais);
            }

            nuevaDireccion();
        }
    }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();
*/
function Persona(nombre, apellido){
    this.nombre  = nombre,
    this.apellido = apellido,
    this.edad = 30
    
    /*this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido
    }*/
}

Persona.prototype.imprimirInfo = function(){
    return this.nombre + " " + this.apellido
}

var juean = new Persona("Juan", "Mendoza");

//console.log(juean)
//console.log(juean.imprimirInfo())

Number.prototype.esPositivo = function(){
    if (this > 0 ){
        return true;
    }else{
        return false;
    }
}