function resultado(){
    if(parseInt(document.getElementById("nota").value)>=0 && parseInt(document.getElementById("nota").value)<=10){
        if(parseInt(document.getElementById("nota").value)<5)
            document.getElementById("result").innerHTML = "Suspenso";
        else if(parseInt(document.getElementById("nota").value)<7)
            document.getElementById("result").innerHTML = "Bien";
        else if(parseInt(document.getElementById("nota").value)<9)
            document.getElementById("result").innerHTML = "Notable";
        else
            document.getElementById("result").innerHTML = "Sobresaliente"; 
    }
    else{
        document.getElementById("result").innerHTML = "Introduce un valor entre 0 y 10";
    }
}