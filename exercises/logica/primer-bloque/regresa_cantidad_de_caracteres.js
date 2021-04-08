// 1.- Funcion que cuenta el numero de caracteres en un string.
// Ejemplo: mifunc('hola mundo') regresa 10.

const regresaCantidadDeCaracteres = (texto) =>
  typeof texto === "string"
    ? console.log(`Tu string "${texto}" tiene ${texto.length} caracteres`)
    : console.warn("Necesitas pasar una cadena de texto");

regresaCantidadDeCaracteres("hello world");
