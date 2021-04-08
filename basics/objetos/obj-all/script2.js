// arreglos de objetos
const autos = [
    {modelo: 'Mustang', motor: 6.0},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.3}
]

console.log(autos[0].modelo + ' ' + autos[0].motor)
console.log(autos[1].modelo + ' ' + autos[1].motor)
console.log(autos[2].modelo + ' ' + autos[2].motor)

console.log('--- Con for ---')

for(i = 0; i < autos.length; i++ ) {
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
}

