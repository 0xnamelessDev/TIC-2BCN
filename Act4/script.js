let num1,num2;
function calcular(){
    num1 =  prompt("introduzca el primer valor");
    num2 =  prompt("introduzca el segundo valor");
    if(!isNaN(num1) && !isNaN(num2)){
        try{
        alert(`
        Primer valor: ${num1}
        Segundo valor: ${num2}
        Suma: ${eval(`${num1}+${num2}`)}
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
