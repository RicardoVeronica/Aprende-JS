// Creacion de ropiedades dinamicas en un objeto

// Forma comun
// dummy data
// const users = ["Richard", "Ricardo", "Set", "Cain"];

// const objUsers = {};

// console.log(objUsers);

// users.forEach((user, index) => {
//   objUsers[`id_${index}`] = user;
// });

// console.log(objUsers);

// Forma con compute properties
// dummy data
const users = ["Richard", "Ricardo", "Set", "Cain"];

let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsers = {
  [`id_${aleatorio}`]: "Valor aleatorio",
};

console.log(objUsers);

users.forEach((user, index) => {
  objUsers[`id_${index}`] = user;
});

console.log(objUsers);
