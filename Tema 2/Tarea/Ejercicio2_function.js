function pregunta() {
    var mensaje;
    var opcion = prompt("¿Número de hijos?", "0");

    //Si nuestro número es nulo nos dirá que no es válido

    if (opcion == null || opcion == "") {
        mensaje = "No válido";

    } else {
        mensaje = "Tiene: " + opcion + " hijos";
    }
    alert(mensaje);
}