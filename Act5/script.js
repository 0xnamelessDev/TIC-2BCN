function calcular(){
    let num1,num2;
    num1 =  parseInt(document.getElementById("num1").value);
    num2 =  parseInt(document.getElementById("num2").value);
    if(!isNaN(num1) && !isNaN(num2)){
        try{
        document.getElementById("firstVal").innerHTML =`Primer valor: ${num1}`;
        document.getElementById("secondVal").innerHTML =`Segundo valor: ${num2}`;
        document.getElementById("suma").innerHTML =`Suma: ${num1+num2}`;
        document.getElementById("resta").innerHTML =`Resta: ${num1-num2}`;
        document.getElementById("producto").innerHTML =`Producto: ${num1*num2}`;
        document.getElementById("division").innerHTML =`División: ${num1/num2}`;
        document.getElementById("resto").innerHTML =`Resto: ${num1%num2}`;
        }
        catch{
            document.getElementById("result").innerHTML = "Error!!!";
        }
    }
    else{
       document.getElementById("result").innerHTML = "Introduzca valores numéricos";
    }
}
