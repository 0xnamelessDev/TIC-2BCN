
function calcular(){
    let num1,num2;
    num1 =  parseInt(prompt("introduzca el primer valor"));
    num2 =  parseInt(prompt("introduzca el segundo valor"));
    if(!isNaN(num1) && !isNaN(num2)){
        try{
        alert(`
        Primer valor: ${num1}
        Segundo valor: ${num2}
        Suma: ${num1+num2}
        Producto: ${num1*num2}
        División: ${num1/num2}
        Resto: ${num1%num2}
        `);
        }
        catch{
            alert("Error!!!")
        }
    }
    else{
        alert("Introduzca valores numéricos")
    }
}
