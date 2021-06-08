/* spread operator - pisa lo que esta o agrega si no hay nada igual - */
const carro = {
    puertas: 4,
}

const carro2 = {
    llantas: 2,
}
const carro3 = {
    vidrios: 5,
}

// los 3 puntos es hacer una copia de objeto con sus claves y valores sin hacer referencia al objeto
const miCarro = {...carro, ...carro2, carro3};

console.log('miCarro', miCarro);


//// como funciona con un array
const numeros = [1,2,3];
const letras = ['s','o','a'];

const nuevoArray = [...numeros, ...letras];
console.log('nuevoArray', nuevoArray);


//// asignacion en desestructuracion // destructuring - creame una constante para cada uno de estos objetos-  
const carro4 = { puertas: 4, vidrios: 4 }
/*
const puertas = carro4.puertas;
const vidiros = carro4.vidrios;
*/
//podria hacerlo de esta manera y eliminar las 2 lineas anteriores
const { puertas: numeroPuertas = 9, vidrios: nuemroVidrios = 100} = carro4;

console.log('puertas', numeroPuertas, 'vidrios', numerosVidrios);

