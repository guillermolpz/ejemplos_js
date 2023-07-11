var objetoJS = {
    nombre: "Alberto",
    edad: 30,
    imprimir: function(){
        console.log(this.nombre, this.edad)
    }
};

console.log("Objeto literal ", objetoJS);

var jsonString = JSON.stringify(objetoJS);
console.log(jsonString)

var objetoDesdeJson = JSON.parse(jsonString)
console.log(objetoDesdeJson)