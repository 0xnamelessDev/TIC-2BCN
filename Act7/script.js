function resultado(){
    let nota = parseInt(document.getElementById("nota").value);
    if(nota>=0 && nota<=10){
        if(nota<5) document.getElementById("result").innerHTML = "Suspenso";
        else if(nota<7) document.getElementById("result").innerHTML = "Bien";
        else if(nota<9) document.getElementById("result").innerHTML = "Notable";
        else document.getElementById("result").innerHTML = "Sobresaliente"; 
    }
    else{
        document.getElementById("result").innerHTML = "Introduce un valor entre 0 y 10";
    }
}