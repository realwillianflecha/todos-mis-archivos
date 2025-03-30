// WeakSet

const Weakset = new WeakSet();

const cliente = {
    cliente: 'Willian',
    saldo: 300
}


Weakset.add(cliente);

// console.log(Weakset.has(cliente2));


// Weakset.delete(cliente);

console.log(cliente.size);


console.log(Weakset);

                    // Diferencias ante un Set normal:

// No te puede iterar usando forEach, osea no es iterable
// Solo puede tomar como valor un objeto entero
// No se puede saber su tamaño con .size