//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 

let pokemones =
[
 'Pikachu',
 'Charmander',
 'Bulbasaur',
 'Squirtle'
]

const resultArray = pokemones.map(elemen => elemen.toUpperCase())
console.log(resultArray)