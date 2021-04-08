// Sets nuevo tipo de datos en js
// Estructura similar a un array
// Discrimina elementos repetidos

const set = new Set([1, 2, 3, 4, 4, 3, 1, 5, true, true, false, {}, {}]);

console.log(set);
console.log(`type of set: ${typeof set}`); // object
console.log(`Sise of set: ${set.size}`); // ver cuantos elementos tiene
console.log(set.add([1, 2, 3, 3])); // agrega elementos
console.log(`Elimina elemmento: ${set.delete(true)}`); // elimina elemento
console.log(`Existe elemento true? ${set.has(true)}`); // comprueba si un elementos existe

// console.log("------------ Iterar elementos forOf ----------------");
// for (item of set) {
//   console.log(item);
// }

// console.log("------------ Iterar elementos forEach ----------------");
// set.forEach((item) => console.log(item));

console.log("---------------- Ver elementos por separado -------------------");
// cualquier tipo de dato que permite contar elementos es un iterable loops
// array.from permite convertir un tipo de dato iterable en iterable array
console.log(set[0]); // undefined

let setLikeArray = Array.from(set); // convierte a array
console.log(setLikeArray);
console.log(setLikeArray[9]);
console.log(`length of setLikeArray: ${setLikeArray.length}`);

set.clear(); // elimina todos los elementos del set
console.log(set);
