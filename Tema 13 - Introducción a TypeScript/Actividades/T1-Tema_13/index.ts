class Boton {

    // La clase boton crea los botones además del alert, ya que cuanddo se crea
    // un botón nuevo al pulsarlo este llama a la clase boton para que salga el alert

}

// Interfaz que recogerá la creación y eliminación de botones
interface Buttons {

    // Declaramos función add
    add():void;

}

// Clase grupo de botones que implementa la interfaz 
class GrupoBot implements Buttons {
    // private contador:number ;

    // Función add para crear nueva clase
    add(): void {
        let boton = new Boton;
    }

}