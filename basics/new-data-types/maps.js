// Maps son objetos iteradores que sirven para almacenar valores
// Coleccion de datos relacionados entre si
// Trabajan similar a los metodos getters y setters
// Podemos setear llaves no solo con strings sino con otros primitivos como null, number, etc

const mapa = new Map();

// set valores
mapa.set("name", "Richard");
mapa.set("last_name", "Veronica");
mapa.set("age", 35);
mapa.set("name", "Ricardo"); // sobreescribe valor

console.log(mapa);
console.log(`Elemetos en mi map ${mapa.size}`);

// get valores
console.log(`Valor de last_name: ${mapa.get("last_name")}`);
console.log(`Mi mapa tiene la llave age? ${mapa.has("age")}`);

// eliminar elementos
mapa.delete("last_name");
console.log(mapa);

console.log("--------- Iterar con forOf ---------");
for (let [key, value] of mapa) {
  console.log(`Llave: ${key} - Valor: ${value}`);
}
