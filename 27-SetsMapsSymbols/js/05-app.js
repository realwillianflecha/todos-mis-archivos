const sym = Symbol();
const sym2 = Symbol();

// console.log( Symbol() === Symbol() );


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Willian';
persona[apellido] = 'Flecha';
persona.tipoCliente = 'Premium';
persona.saldo = 500;


console.log(persona);
// console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol no son iterables
for(let i in persona) {
    console.log(i);
}


// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};


cliente[nombreCliente] = 'Pedro';


console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);