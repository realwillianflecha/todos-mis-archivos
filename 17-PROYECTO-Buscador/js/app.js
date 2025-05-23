// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear(); - 5;
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


// Eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles al cargar


    // Llena las opciones de años
    llenarSelect();
})

// Event Listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})


// Funciones
function mostrarAutos() {
    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}

        `;

        // Insertar  en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Genera los años del select
function llenarSelect() {
    
    for(let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
        
}


// Funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca )
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }
    return auto;
}