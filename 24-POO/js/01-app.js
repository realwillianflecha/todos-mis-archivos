class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion();

}

const juan = new Cliente('Juan', 400);
console.log(juan);


const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2);