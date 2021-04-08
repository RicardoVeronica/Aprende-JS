// Ejemplo con async/await
import booksDB from './db.js'

async function getBookById(id) {
  const book = booksDB.find(book => book.id === id)

  if(!book) {
    const error = new Error()
    error.message = 'Book not found'
    throw error
  }

  return book
}

async function main() {
  try {
    const book = await getBookById(1) // Esto regresa una promise
    console.log(book)
  } catch(exep) {
    console.log(exep.message) 
  }
}

main()
