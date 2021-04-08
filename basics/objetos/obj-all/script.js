// todo en JS es un objeto
let a = new String('hello') // instancia del objeto string

const persona = {
    name: 'Ricardo',
    lastName: 'Duran',
    profession: 'Developer',
    email: 'ricardo@mail.com',
    years: 35,
    music: ['Blues', 'Metal', 'Rock'],
    home: {
        city: 'Guadalajara',
        country: 'Mexico'
    },
    birthday: function() {
        return new Date().getFullYear() - this.years
    }
}

// agregar al arreglo
persona.music.push('Clasic')
persona.music.push('Opera')

// ejecutar funcion
console.log(persona)
console.log(persona.birthday)
console.log(persona.birthday())

// metodos del objeto objeto
console.log(Object.keys(persona))
console.log(Object.values(persona))
console.log(persona.hasOwnProperty('years'))
