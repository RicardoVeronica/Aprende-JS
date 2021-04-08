// Object literal ES6 (tipo JSON)
const cliente = {
    nombre: 'setcain',
    saldo: 3000,

    tipoCliente: function() {
        let tipo

        if(this.saldo > 1000) {
            tipo = 'Gold'   
        } else (
            tipo = 'green'
        )

        return tipo
    }
}

console.log(cliente.tipoCliente())
console.clear()


// Object ES5 (Te permite instanciar muchos objetos)
function Cliente(nombre, saldo) {
    this.nombre = nombre 
    this.saldo = saldo

    this.clienteTipo = function() {
        if(this.saldo > 1000) {
            tipo = 'Gold'   
        } else (
            tipo = 'green'
        )

        return tipo
    }
}

const persona = new Cliente('Setcain', 300)

console.log(persona)
console.clear()


// Prototype
function Cliente(nombre, saldo) {
    this.nombre = nombre 
    this.saldo = saldo
}

// Metodos prototype
Cliente.prototype.tipoCliente = function() {
    let tipo

    if(this.saldo > 1000) {
        tipo = 'Gold'   
    } else (
        tipo = 'green'
    )

    return tipo
}

Cliente.prototype.infoCliente = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}, Cliente ${this.tipoCliente()}`
}

const cliente1 = new Cliente('Set', 39393)
const cliente2 = new Cliente('Ricardo', 4393)
const cliente3 = new Cliente('Cain', 39)

console.log(cliente1.infoCliente())
console.log(cliente2.infoCliente())
console.log(cliente3.infoCliente())
console.clear()

// Herencia en prototipos
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono
    this.tipo = tipo
}

Empresa.prototype = Object.create(Cliente.prototype)

const empresa1 = new Empresa('Evilcorp', 34095843980934, 2243235, 'Empresa')

console.log(empresa1)
console.log(empresa1.infoCliente())
console.clear()


// Object create
const Persona = {
    imprimirSaldo: function() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`
    },

    retirarSaldo: function(retiro) {
        return this.saldo -= retiro
    }
}

const mary = Object.create(Persona)
mary.nombre = 'Mary'
mary.saldo = 1000

mary.retirarSaldo(100)

console.log(mary.imprimirSaldo())
console.clear()


// Clases
class Customer {
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }

    imprimirSaldo() {
        return `
            Hola ${this.nombre}
            Tu saldo es de: ${this.saldo}
        `
    }

    tipoCliente() {
        let tipo
        if (this.saldo >= 500000) {
            tipo = 'Premium'
        }
        else {
            tipo = 'Normal'
        }

        return tipo
    }

    retiro(cantidad) {
        return this.saldo -= cantidad
    }

    // no se necesita instanciar
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

const chiks = new Customer('Claudia Regina', 'Veronica de Santiago', 10000000)

console.log(chiks.imprimirSaldo())
console.log(chiks.tipoCliente())
console.log(chiks.retiro(1000))
// console.log(Customer.bienvenida()) // Quitar la instancia para ejecutar
console.clear()

// Herencia en clases
class Enterprice extends Customer {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo)
        this.telefono = telefono
        this.tipo = tipo
    }

    // Reescribir metodo con el mismo nombre
    static bienvenida() {
        return `Bienvenido al cajero empresarial`
    }
}

// const enterprice1 = new Enterprice('Evilcorp', 99999999999, 36061963, 'Owner of the world')

// console.log(Enterprice)
// console.log(enterprice1)
// console.log(enterprice1.tipoCliente())
console.log(Enterprice.bienvenida())
