// Recursividad funcion que se llama asi misma hasta que se cumple un if
// Obviar loop como for, while, etc, para no hacer confuso el programa

// const fn = () =>
// if
// ? some()
// : fn()

// const conteoRegresivo = (x) => {
  // forma clasica de if
  // if (x < 0) {
  //   return
  // } else {
  //   console.log(x)
  // }

  // forma profesional
  // if (x < 0) return
  // console.log(x)

  // return conteoRegresivo(x - 1)
// }

// conteoRegresivo(10)

const axios = require('axios')

const llamarApi = async (url, llamados = 0) => {
  try {
    const result = await axios.get(url) 
    console.log(result)
  } catch(e) {
    if (llamados > 5) {
      return ''
    }
    console.log(e)
    return llamarApi(url, llamados + 1)
  }
} 

// llamarApi('https://jsonplaceholder.typicode.com/users')
// llamarApi('http://0.0.0.0:8000/api/')
