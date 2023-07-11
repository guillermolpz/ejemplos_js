
function crearCookie(nombre, valor){
    //valor = escape(valor);
    var hoy = new Date()
    hoy.setMonth(hoy.getMonth() + 1)

    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}

function borrarCookie(nombre){
    var hoy = new Date()
    hoy.setMonth(hoy.getMonth() - 1)

    document.cookie = nombre+"=x;expires="+hoy.toUTCString()+";";
}

function getCookie(nombre){

    var cookies = document.cookie;

    var cookiesArr = cookies.split("; ");
    console.log(cookiesArr)

    for (var i=0; i < cookiesArr.length; i++){
        var parArray = cookiesArr[i].split("=");
        cookiesArr[i]= parArray;

        if (parArray[0] === nombre){
            //return unescape(parArray[1])
            return parArray[1]
        }
    }
    console.log(cookiesArr)

    return undefined
}

//crearCookie("nombre", "Guillermo");

//borrarCookie("nombre");

console.log(getCookie("nombre"));