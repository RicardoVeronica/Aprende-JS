/*
 * Local Storage pertenece al objeto Window (window.localStorage)
 * En localStorage los datos se mantienen aunque el navegador se cierre
 * a diferencia de sessionStorage, que se pierden los datos al cerrar el
 * navegador.
 * localStorage solo almacena string.
 * */

localStorage.setItem("llave", "valor");
localStorage.removeItem("llave");

const product = {
  name: "First product",
  price: 100,
};

// console.log(product);

// Transformar a string un obj
const productSting = JSON.stringify(product);

// console.log(productSting);

localStorage.setItem("product", productSting);

// leer datos de local storage para interactuar con ellos
const productGet = localStorage.getItem("product");

// Transformar un string a json
console.log(JSON.parse(productGet));
