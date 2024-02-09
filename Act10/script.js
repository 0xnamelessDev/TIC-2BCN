const calificar = () => {
    let calificaciones = [
        {alumno: "Adolfo", nota: null},
        {alumno: "Ilyas", nota: null},
        {alumno: "Oliver", nota: null},
        {alumno: "Samuel", nota: null},
    ];
    let alumnos = []

    calificaciones.forEach((calificacion, index)=> {

        do{
            calificacion.nota = parseInt(prompt(`Introduce la nota de ${calificacion.alumno}`)); 
        }while(calificacion.nota<0 || calificacion.nota>10);

        alumnos[index] = `${calificacion.alumno}: ${calificacion.nota}</br>`;
    });

    document.getElementById("result").innerHTML = "Calificaciones: <br/>" + alumnos.join("");
};


