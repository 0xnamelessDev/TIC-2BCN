const resultado = (usarIf) => {
    let hora = parseInt(document.getElementById("hora").value);
    if(hora>=0 && hora<=24){
        if(usarIf){
            if(hora>=7 && hora<=11) document.getElementById("result").innerHTML = "Buenos días";
            else if(hora>11 && hora<=21) document.getElementById("result").innerHTML = "Buenas tardes";
            else document.getElementById("result").innerHTML = "Buenas noches"; 
        }
        else{
            switch(hora){
                case 7:
                case 8:
                case 9:
                case 10:
                case 11: 
                    document.getElementById("result").innerHTML = "Buenos días";
                break;
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                    document.getElementById("result").innerHTML = "Buenas tardes";
                break;
                default:
                    document.getElementById("result").innerHTML = "Buenas noches";
            }
        }
    }
    else{
        document.getElementById("result").innerHTML = "Introduzca una hora válida";
    }
};

