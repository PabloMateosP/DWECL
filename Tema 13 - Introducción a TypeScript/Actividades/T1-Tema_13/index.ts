// class Boton {

//     constructor(contador: number) {
//         var botones = $("<button>").text(contador)
//         $(".dynamicsButtons").append(botones)
//     }
//     // La clase boton crea los botones además del alert, ya que cuanddo se crea
//     // un botón nuevo al pulsarlo este llama a la clase boton para que salga el alert

// }

// // Interfaz que recogerá la creación y eliminación de botones
// interface Buttons {

//     // Declaramos función add
//     add():void;
//     res():void;

// }

// // Clase grupo de botones que implementa la interfaz 
// // Clase principal 
// class GrupoBot implements Buttons {

//     private contador: number = 0
//     constructor(){
//         this.add()
//     }

//     // Función add para crear nueva clase
//     add(): void {
//         this.contador = this.contador + 1;
//         let boton = new Boton(this.contador);
//     }

//     res(): void {
//         this.contador = this.contador - 1;
//     }
// }

// $(function () {
//     $("#idButtonAdd").on(new GrupoBot);
// });

interface IGrupoBot {
    add(): void;
    rest(): void;
}

class Boton {
    constructor(id: number) {
        let btn = $(`<button id="${id}">${id}</button>`);
        btn.on("click", () => alert(`Botón ${id} pulsado`));
        $(".dynamicsButtons").append(btn);
    }
}

class GrupoBot implements IGrupoBot {
    private contador: number = 0;

    constructor() {
        this.contador = 0;
        $("#idButtonAdd").on('click', ()=>this.add());
        $("#idButtonDel").on('click', ()=>this.rest());
    }

    add(): void {
        this.contador++;
        let boton = new Boton(this.contador);
    }

    rest(): void {
        if(this.contador >= 1){
           $(`#${this.contador}`).remove();
           this.contador--; 
        }
    }
}

$(function () {
    let grupoBot = new GrupoBot(); 
});