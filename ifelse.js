
var nota = 70;

if (nota >= 90){
    console.log("A")
}else if (nota >= 80){
    console.log("B")
}else if (nota >= 70){
    console.log("C")
}else if (nota >= 60){
    console.log("D")
}else{
    if(nota < 50){
        console.log("-F")
    }else{
        console.log("F")
    }
    
}

console.log("Termino el codigo.")

var a = 10;
var b = 20;

//var c = (a > b) ? a : b;
var c = (a > b) ? function(){
    console.log("A es mayor a B");
    return a
}() : function(){
    console.log("B es mayor que A");
    return b
}();

console.log(c)

var mes = 2

switch (mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Enero");
        break;
    case 3:
        console.log("Enero");
        break;
    default:
        console.log("Cualquier otro mes")
        break;
}