// syntax sugar ES6 for classes
class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }

    sonar() {
        console.log('hago sonidos Aaaaaaaaaaaahrrggggg')
    }

    saludar() {
        console.log(`hola me llamo ${this.nombre}`)
    }
}

// herancia
class Perro extends Animal{
    constructor(nombre, genero, size) { // metodo constructor
        super(nombre, genero) // lo que herada de Animal
        this.size = size // nuevo atributo
        this.raza = null // para getter y setter
    } 

    // sobrescribir metodos
    sonar() {
        console.log('soy un perro guuuuauuu')
    }

    // nuevo metodo
    ladrar() {
        console.log('Estoy ladrando guuuuauuu, guuuuuuauu')
    }

    // metodo estatico
    static queEres() {
        console.log('Soy un mamifero canino')
    }

    // getter y setter
    set setRaza(raza) {
        this.raza = raza 
    }

    get getRaza() {
        return this.raza
    }
}

/*
 * los metodos estaticos se pueden ejecutar sin instanciar la clase, solo
 * nombrando la clase y el metodo tipo:
 * Perro.ladrar()
 * */
Perro.queEres()

// instancias
const minnie = new Animal('Minnie Mouse', 'Hembra')
const scooby = new Perro('Scooby Doo', 'Macho', 'Gigante')

console.log(minnie)
minnie.sonar()
minnie.saludar()

console.log(scooby)
scooby.sonar()
scooby.saludar()
scooby.ladrar()

/*
 * los metodos getters y setters nos permiten establecer y obtener valores
 * de atributos en las clases
 * */
scooby.setRaza = 'Grand Danes' // establece atributo
console.log(scooby.getRaza) // obtiene atributo
