const factorial = () => {
    let num = parseInt(document.getElementById("num").value);
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    document.getElementById("result").innerHTML = "Resultado: " + fact;
}

