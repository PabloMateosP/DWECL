"use strict";
class Boton {
    constructor(id) {
        let btn = $(`<button id="${id}">${id}</button>`);
        btn.on("click", () => alert(`Botón ${id} pulsado`));
        $(".dynamicsButtons").append(btn);
    }
}
class GrupoBot {
    constructor() {
        this.contador = 0;
        this.contador = 0;
        $("#idButtonAdd").on('click', () => this.add());
        $("#idButtonDel").on('click', () => this.rest());
    }
    add() {
        this.contador++;
        let boton = new Boton(this.contador);
    }
    rest() {
        if (this.contador >= 1) {
            $(`#${this.contador}`).remove();
            this.contador--;
        }
    }
}
$(function () {
    let grupoBot = new GrupoBot();
});
