// 5 - Programa una funcion que invierta las palabras de una cadena de texto
// Ejemplo: mifunc('hola mundo') regresa odnum aloh

const inviertePalabras = (texto) => {
  typeof texto === "string"
    ? console.info(texto.split("").reverse().join(""))
    : console.warn("Asegurate de escribir una cadena de caracteres");
};

inviertePalabras("Hola mundo");
