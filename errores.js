try{
    var a = 100;
    if (a === 100){
        throw 'que mal';
    }else{
        throw 'oh oh';
    }
    
    console.log("El valor de a: ", a);
}
catch(e){
    registrarError(e)
    if (e === "que mal"){
        console.error("Error tipo 1: ", e)
    }

    if (e === "oh oh"){
        console.error("Error tipo 2: ", e)
    }
}
finally{
    console.log("Finalmente")
}

function registrarError(e){
    var ahora = new Date();
    console.log("Se registro un error: ",e, " a las: ", ahora)
}