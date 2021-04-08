// const miPromesa = Promise.resolve(1)

// miPromesa
//   .then(number => number + 5) // number = 1 + 5 = 6
//   .then(number => Promise.resolve(number + 5)) // 6 + 5 = 11
//   .then(number => Promise.resolve(number + 100)) // 11 + 100 = 111
//   .then(number => Promise.resolve(number + 1000)) // 111 + 1000 = 1111
//   .then(number => console.log(`Number = ${number}`))

//   .then(number => Promise.reject('Error algo anda mal')) // Si algo falla reject

//   // Estas lineas se ignoran por el reject y se pasa directamente al catch
//   .then(number => Promise.resolve(number + 1)) // 1111 + 1 = 1112
//   .then(number => Promise.resolve(number + 1)) // 1112 + 1 = 1113
//   .then(number => Promise.resolve(number + 1)) // 1113 + 1 = 1114
//   .then(number => console.log(`Number = ${number}`))

//   // si no ponemos esta linea el error lo marca la consola (Feo)
//   .catch(error => console.log(error))

require('isomorphic-fetch')

fetch('http://jsonplaceholder.typicode.com/users')
  // .then(function(x) {return x.json()})
  // .then(function(x) {return console.log(x)})
  .then(x => x.json())
  .then(x => console.log(x))
