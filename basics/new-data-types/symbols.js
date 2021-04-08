// Los Symbols son nuevos tipos de datos implementados en ES6
// Es un tipo de dato primitivo como string, number, etc.
// Se usan para crear propiedades privadas en un objeto
// Se crean como identificadores de referencia y no de valor

let id = "hola";
let id2 = "hola";
console.log(id === id2); // true (mismo valor)
console.log(typeof id);

let idSymbol = Symbol("hello"); // hello es una descripcion o tag
let idSymbol2 = Symbol("hello");
console.log(idSymbol === idSymbol2); // false (diferente referencia mismo valor)
console.log(typeof idSymbol);

console.log("-------------- En objs ------------------");

const AGE = Symbol("age");
const HELLO = Symbol("hello");

const Persona = {
  name: "Richard",
  [AGE]: 35,
};

console.log(`Atributo name de mi obj: ${Persona.name}`);
console.log(`Symbol age con notacion de punto: ${Persona.AGE}`);
console.log(`Symbol age con notacion de corchetes: ${Persona[AGE]}`);

Persona[HELLO] = function () {
  console.log("hello world");
};

Persona[HELLO]();

for (let elementos in Persona) {
  console.log(`Elementos de mi obj: ${elementos}`); // los symbols son privados
}

// listar elemetos privados del objeto en array
const privateElemets = Object.getOwnPropertySymbols(Persona);
console.log(privateElemets);

console.log(Persona); // Ver objeto
