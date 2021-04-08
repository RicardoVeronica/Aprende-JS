// forma optimizada de old school para no duplicar metodos
function Animal(nombre, genero) {
    // constructor
    this.nombre = nombre
    this.genero = genero
}

// agrega metodos prototipicos a Animal separados del constructor
Animal.prototype.sonar = function() {
    console.log('haaaaaaaaagh')
}

Animal.prototype.saludar = function() {
    console.log(`hello my name is ${this.nombre}`)
}

// let mimi = new Animal('Mimi', 'Hembra')
// console.log(mimi)
// console.log(mimi.nombre)
// mimi.sonar()
// mimi.saludar()


// herencia prototipica
function Perro(nombre, genero, size) {
    this.super = Animal // de quien hereda
    this.super(nombre, genero) // que hereda
    this.size = size // agrega nuevos atributos
}

// declarar Perro como Animal
Perro.prototype = new Animal()

// sobrescribir metodos
Perro.prototype.sonar = function() {
    console.log('soy un perro')
}

// agregar metodos
Perro.prototype.ladrar = function() {
    console.log('guauu')
}

// instancia
const snoopy = new Perro('Snoopy', 'Macho', 'Mediano')
console.log(snoopy)
console.log(snoopy.size)
snoopy.sonar()
snoopy.ladrar()

