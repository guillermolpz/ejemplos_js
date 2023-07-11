/*
 Array 1
 */
console.log("Array: Parte 1");

var arr = [5,4,3,2,1];

console.log(arr)

arr.reverse();

console.log(arr)

arr = arr.map(function(elem){
    //console.log(elem)
    elem *= elem;
    return elem;
});

console.log(arr)

arr = arr.map( Math.sqrt );

console.log(arr);

arr = arr.join("|");

console.log(arr);

arr = arr.split("|");

console.log(arr);

arr.push("6");

console.log(arr);

arr.unshift("0");

console.log(arr);

console.log(arr.toString());

var elimine = arr.pop();

console.log(arr, elimine);

// Com funcionan los parametros de la funcion splice()
// arr.splice('Posision a eliminar','Cantidad de elemento a eliminar','Dato a colocar en la posicion eliminada')
arr.splice(1, 1, "10");

console.log(arr);

//Esta funcion es difetente solo obtinene los datos dentro de las posiciones indicadas
// arr.slice('Posicion donde inicia', 'Posicion donde finaliza')
arr = arr.slice(1, 3);

console.log(arr);

/*
    Array: Parte 2
*/
console.log("Array: Parte 2");

var arr = [
    true,
    {
        nombre: "Alberto",
        apellido: "Luna"
    },
    function(){
        console.log("Estoy viviendo en un array")
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido)
    },
    [
        "Alberto",
        "Paula",
        "Guillermo",
        "Marisol",
        [
            "Juan",
            "Pedro",
            "Dilcia",
            function(){
                console.log(this)
            }
        ]
    ]
];

console.log(arr);
console.log(arr[1])
arr[2]()
arr[3](arr[1]);

console.log(arr[4][1])

var arreglo2 = arr[4][4]

arreglo2[3]()