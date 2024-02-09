

const factorialFor = () => {
    let fact = 1;
    let num = parseInt(document.getElementById("num").value);
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    document.getElementById("result").innerHTML = "Resultado: " + fact;
}

const factorialWhile = () => {
    let fact = 1;
    let num = parseInt(document.getElementById("num").value);
    let i = 1;
    while(i<=num){
        fact *= i;
        i++;
    }
    document.getElementById("result").innerHTML = "Resultado: " + fact;
}


function factorialRecursivo(){
    let factRec = 1;
    let i = 1;

    RecursiveFunction();

    document.getElementById("result").innerHTML = "Resultado: " + factRec;

    function RecursiveFunction(){
        let num= parseInt(document.getElementById("num").value);
        if(i<=num){
            factRec *= i;
            i++;
            RecursiveFunction();
        }
    }
}


