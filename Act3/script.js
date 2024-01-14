
function saludo () {
    const nombre = () => prompt("Introduzca su nombre");
    const edad = () => prompt("Introduzca su edad");
    alert(`Hola ${nombre()}, tienes ${edad()} años`);
}