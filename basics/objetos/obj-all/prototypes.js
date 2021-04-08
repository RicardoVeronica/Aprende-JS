// old school
Function constructora

function Animal(nombre, genero) {
    this.nombre = nombre
    this.genero = genero

    this.sonar = function() {
        console.log('haaaaaaaaagh')
    }

    this.saludar = function() {
        console.log(`hello my name is ${nombre}`)
    }
}

let Fifi = new Animal('Fifi', 'Hembra')
console.log(Fifi)
console.log(Fifi.nombre)
fifi.saludar() // Se duplican los metodos en cada instancia, no es optimo
