function conversion() {
    var mensaje;
    var velocidadInicial = prompt("Introduzca una velocidad en kilometros / horas");
    var velocidadFinal;

    //Si nuestro número es nulo nos dirá que no es válido

    if (velocidadInicial == null || velocidadInicial == "" ) {
        mensaje = "No válido";
    } else {
        var velocidadFinal = (parseFloat(velocidadInicial) * 1000) / 3600;
        mensaje = velocidadFinal;
    }
    alert(mensaje);
}