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