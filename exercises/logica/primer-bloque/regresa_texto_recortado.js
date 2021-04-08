// 2.- Funcion que regresa el texto recortado segun el numero de
// caracteres indicados
// Ejemplo: mifunc('hola mundo', 4) regresa 'hola'.

const regresaTextoRecortado = (texto, caracteres) =>
  typeof texto === "string" && typeof caracteres === "number"
    ? texto.slice(0, caracteres)
    : "Asegurate de que primero pases una cadena de caracteres y despues un numero entero";

console.log(regresaTextoRecortado("hello world", 5));
