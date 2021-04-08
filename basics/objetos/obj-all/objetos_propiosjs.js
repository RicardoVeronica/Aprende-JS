//objeto console
console.log(console)
console.log('log es para debugear codigo')
console.error('error es un error')
console.warn('warn es una alerta')
console.info('info es solo para dar informacion')
console.clear()

console.group('esto es un grupo') // console.groupCollapsed en chrome es lo mismo
console.log(document) // muestra el documento html
console.dir(document) // muestra las propiedades y metodos como objeto
console.groupEnd()
console.clear()

console.group('tablas en console')
console.log(console)
console.table(Object.entries(console)) // se upuede hacer con arrays y objetos
console.groupEnd('tablas en console')
console.clear()

console.time('tiempo')
const arreglo = Array(1000000)
console.timeEnd('tiempo')
console.clear()

//testing en console
let x = 4
let y = 3
let test = 'Se espera que x sea menor que y'

console.assert(x < y, [x, y ,test])
