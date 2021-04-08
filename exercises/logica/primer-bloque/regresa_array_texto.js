// 3.- Funcion que regrese un array de un texto pasado como parametro.
// Ejemplo: mifunc('hola que tal') regresa ['hola', 'que', 'tal']

const regresaArrayDeTexto = (texto, separador) =>
  typeof texto === "string"
    ? texto.split(separador)
    : console.warn("Asegurate de pasar una cadena de texto");

console.log(regresaArrayDeTexto("Hello mother fucker", ""));
console.log(regresaArrayDeTexto("10/junio/1985", "/"));
