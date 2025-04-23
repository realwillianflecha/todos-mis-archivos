const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
} )



aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch(error => console.log(error))



// Hay 3 valores posibles...
// fufilled - El promise se cumplio
// rejected - El promise no se cumplio
// pending - No se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
    console.log(mensaje);
}