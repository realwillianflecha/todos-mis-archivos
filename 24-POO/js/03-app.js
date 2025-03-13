class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super();
        this.saldo = telefono;
        this.saldo = categoria;
    }
}


const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo con Juan', 500, 193401, 'Aprendizaje en linea');
console.log(empresa);
console.log(empresa.mostrarInformacion());