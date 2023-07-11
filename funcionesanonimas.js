( function(){
    var a = 10;

    console.log(a)
    
    function cambiarA(){
        a = 20;
    }
    
    cambiarA();
    
    console.log(a)
}) ();


function ejecutarFuncion( fn ){
    if (fn()==1){
        return true
    }else{
        return false;
    }
};

console.log(
    ejecutarFuncion( function(){
        console.log("Funcion anónima ejecutada");
        return 1;
    })
)

function identifica(param){
    console.log( param instanceof Persona)
    if ( typeof param == "function" ){
        param();
    }else{
        console.log( param )
    }

}

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}

var fernando = new Persona();

identifica(fernando)


