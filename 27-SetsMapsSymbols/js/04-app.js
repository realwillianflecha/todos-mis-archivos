const producto = {
    idProducto : 10
}

const weakmap = new weakMap();

weakmap.set(producto, 'Monitor');


console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
// console.log(weakmap.size);


console.log(weakmap);