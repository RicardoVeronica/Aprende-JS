// 6 - Programa una funcion para encontrar el numero de veces que se repite una
// palabra en un texto largo
// Ejemplo: mifun('hola mundo, adios mundo', 'mundo') regresa 2

// Ejemplo sin funcion
// const cadena = 'Cuantas veces aparece la letra "A" en esta cadena';
// const coincidencias = [];
// for (let i = 0; i < cadena.length; i++) {
//   cadena[i].toLowerCase() === "a"
//     ? coincidencias.push(i)
//     : "No existen coincidencias";
// }
// console.log(coincidencias.length);

// Ejemplo contar letras
const contarLetrasEnTexto = (texto, letraAEncontrar) => {
  if (typeof texto === "string" && typeof letraAEncontrar === "string") {
    const coincidencias = [];
    for (let i = 0; i < texto.length; i++) {
      texto[i].toLowerCase() === letraAEncontrar
        ? coincidencias.push(i)
        : "No existen coincidencias";
    }
    return coincidencias.length;
  }
};

console.log(contarLetrasEnTexto("hello hello hello world world", "l"));
