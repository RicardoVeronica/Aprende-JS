// 4.- Funcion que repita un string x veces.
// Ejemplo: mifunc('hola mundo', 2) regresa hola mundo hola mundo

const repiteTexto = (texto, repeticiones) =>
  typeof texto === "string" && Math.sign(repeticiones) === 1
    ? texto.repeat(repeticiones)
    : "Asegurate de escribir una cadena de texto seguida de un numero entero positivo diferente de 0";

console.log(repiteTexto("hello/", 5));
