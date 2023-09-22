function suma() {
    var mensaje;
    var numero1 = prompt("Introduzca un primer número");
    var numero2 = prompt("Introduzca un segundo número");
    var sum;

    //Si nuestro número es nulo nos dirá que no es válido

    if (numero1 == null || numero1 == "" || numero2== null || numero2 == "" ) {
        mensaje = "No válido";
    } else {
        var sum = parseInt(numero1) + parseInt(numero2);
        mensaje = sum;
    }
    alert(mensaje);
}