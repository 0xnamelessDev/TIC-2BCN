function resultado(){
    document.getElementById("result").innerHTML = 
        parseInt(document.getElementById("num").value) % 2 == 0? "El número es par":"El número es impar";
}