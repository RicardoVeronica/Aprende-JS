// Promise like if else, result return + and reject return -
// function squarePromise(value) { 
//   return new Promise(function(resolve, reject) {
//     resolve({
//         value: value,
//         result: value * value
//       })
//   })
// }

// squarePromise(0)
//   .then(x => {
//     console.log(`Promise: ${x.value}, ${x.result}`)
//     return squarePromise(1)
//   })
//   .then(x => {
//     console.log(`Promise: ${x.value}, ${x.result}`)
//     return squarePromise(2)
//   })
//   .then(x => {
//     console.log(`Promise: ${x.value}, ${x.result}`)
//     return squarePromise(3)
//   })
//   .then(x => {
//     console.log(`Promise: ${x.value}, ${x.result}`)
//     return squarePromise(4)
//   })
//   .then(x => {
//     console.log(`Promise: ${x.value}, ${x.result}`)
//     return squarePromise(5)
//   })
//   .catch();
// un unico catch error cuando algo falla y no en cada then
// En las callback se tiene que preparar en cada una un error si falla

import booksDB from './db.js'

function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = booksDB.find(book => book.id === id)
    if(!book) {
      const error = new Error()
      error.message = 'Book not found'
      reject(error)
    }

    resolve(book)
  })
}

getBookById(1)
  .then(book => {
    console.log(book)
  })
  .catch(error => {
    console.log(error)
  })
