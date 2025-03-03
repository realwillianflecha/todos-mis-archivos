const diaHoy = new Date();

moment.local('es');

console.log(moment().format('MMMMM Do YYYY h:mm:ss a'));


console.log( moment().format('LLLL', diaHoy) );


console.log( moment().add(3, 'days').calendar() );