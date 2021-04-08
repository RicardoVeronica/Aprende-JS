console.log("---------------------------------------------");

// const iterable = [1, 2, 3];
// const iterador = iterable[Symbol.iterator]();

// console.log(iterable)
// console.log(iterador)
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

// let next = iterador.next();

// while (!next.done) {
//   console.log(next.value); // en todos los iterables existe value
//   next = iterador.next();
// }

console.log("------------------------------------------------------------");

// Generators o function generators, genera iteradores mas facilmente
// yield es como un return que indica donde detener la funcion

function* generador() {
  yield "hola";
  yield "hola2";
  yield "hola3";
  yield "hola4";
  yield 1;
  yield true;
  yield {};
  yield [1, 2, 3];
}

let iter = generador();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for (const element of iter) {
  console.log(element);
}

const arreglo = [...generador()];
console.log(arreglo);
