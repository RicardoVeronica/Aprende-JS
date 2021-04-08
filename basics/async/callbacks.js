// Callback con callbackhell e inseption
// function squareCallback(value, callback) {
//   setTimeout(() => {
//     callback(value, value * value) 
//   }, 0 || Math.random() * 1000)
// }

// // Callback hell
// squareCallback(0, function(value, result) {
//   console.log(`${value} * ${value} = ${result}`)
//   // Inseption
//   squareCallback(1, (value, result) => {
//     console.log(`${value} * ${value} = ${result}`)
//     squareCallback(2, (value, result) => {
//       console.log(`${value} * ${value} = ${result}`)
//       squareCallback(3, (value, result) => {
//         console.log(`${value} * ${value} = ${result}`)
//         squareCallback(4, (value, result) => {
//           console.log(`${value} * ${value} = ${result}`)
//           squareCallback(5, (value, result) => {
//             console.log(`${value} * ${value} = ${result}`)
//           })
//         })
//       })
//     })
//   })
// })

// Ejemplo con temporizadores
// function hello(fn) {  // Funcion como parametro es un callback
//   setTimeout(function() {
//     console.log('Hello callback')
//     fn()
//   }, 1000)
// }

// function hello2() {
//   setTimeout(() => {
//     console.log('fn 2')
//   }, 1000)
// }

// hello(hello2)

// funciones con callback para metematicas
// function calculate(n1, n2, operation) {
//   return operation(n1, n2)
// }

// function add(n1, n2) {
//   return n1 + n2
// }

// function subtract(n1, n2) {
//   return n1 - n2
// }

// function times(n1, n2) {
//   return n1 * n2
// }

// function divide(n1, n2) {
//   return n1 / n2
// }

// console.log(calculate(10, 5, divide))

import booksDB from './db.js'

function getBookById(id, callback) {
  const book = booksDB.find((book) => book.id === id)
  if(!book) {
    const error = new Error()
    error.message = 'Book not found'
    return callback(error)
  }

  callback(null, book)
}

getBookById(2, (err, book) => {
  if(err) {
    return console.log(err.message)
  }

  return console.log(book)
})
