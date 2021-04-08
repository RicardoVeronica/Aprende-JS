// La suma de dos numeros
function adicion(x, y) {
  return x + y;
}

// La diferencia o estraccion de dos numeros
const diferencia = (x, y) => {
  return x - y;
};

// El producto de dos numeros
const producto = (x, y) => x * y;

// La razon o el cociente de dos numeros
const razon = (x, y) => x / y;

// El doble de un numero
const doble = (x) => x * 2;

// El triple de un numero
const triple = (x) => x * 3;

// El cuadrado de un numero
const cuadrado = (x) => x * x;

// El cubo de un numero
const cubo = (x) => x * x * x;

// La mitad de un numero
const mitad = (x) => x / 2;

// La tercera parte parte de un numero
const terceraParte = (x) => x / 3;

// El doble de la suma de dos numeros
const elDobleDeLaSumaDeDosNumeros = (x, y) => 2 * (x + y);

// El triple de la diferencia de dos numeros
const elTripleDeLaDiferenciaDeDosNumeros = (x, y) => (x - y) * 3;

// La suma de dos numeros
const laSumaDeTresNumeros = (x, y, z) => x + y + z;

// Un numero aumentado en tres
const numeroAumentadoEnTres = (x) => x + 3;

// Un numero disminuido en cinco
const numeroDisminuidoEnCinco = (x) => x - 5;

// La diferencia entre un numero y 8
const diferenciaEntreUnNumeroYOcho = (x) => x - 8;

// El doble del producto de dos numeros
const dobleDelProductoDeDosNumeros = (x, y) => x * y * 2;

// El triple del cociente de dos numeros
const tripleDelCocienteDeDosNumeros = (x, y) => (x / y) * 3;

// El cuadrado de la diferencia de dos numeros
const cuadradoDeLaDiferenciaDeDosNumros = (x, y) => (x - y) * (x - y);

// La suma del cuadrado de dos numeros
const sumaDelCuadradoDeDosNumeros = (x, y) => x * x + y * y;

// El sucesor de un numero
const sucesorDeUnNumero = (x) => x + 1;

// El antecesor de un numero
const antecesorDeUnNumero = (x) => x - 1;

// Dos numeros consecutivos
const dosNumerosConsecutivos = (x) => `${x}, ${x + 1}`;

// Tres numeros consecutivos
const tresNumerosConsecutivos = (x) => `${x}, ${x + 1}, ${x + 2}`;

// Un numero par
const numeroPar = (x) => x * 2;

// La suma de tres numeros pares
const sumaDeTresNumerosPares = (x, y, z) => x * 2 + y * 2 + z * 2;

// Numero impar
const numeroImpart = (x) => 2 * x - 1;

// Numero de tres cifras
const numeroDeTresCifras = (x, y, z) => 
  x < 10 && y < 10 && z < 10
    ? x * 100 + y * 10 + z
    : console.log("Cada cifra tiene que ser de un digito");

// El cubo de la quinta parte de un numero
const cuboDeLaQuintaParteDeUnNumero = (x) => (x / 5) * (x / 5) * (x / 5);

// La quinta parte del cubo de un numero
const laQuintaParteDelCuboDeUnNumero = (x) => (x * x * x) / 5;

// La suma de dos numeros dividida por su diferencia
const sumaDeDosNumerosDivididaPorSuDiferencia = (x, y) => x + y / x - y;

// Las tres quintas partes de un numero aumentado en cuatro
const tresQuintasPartesDeUnNumeroAumentadoEnCuatro = (x) => (3 / 5) * (x + 4);

// Las tres quintas partes de un numero, aumentado en cuatro
const capciosa = (x) => ((3 / 5) * x) + 4;

// La suma de un numero par y el triple del siguiente
const sumaDeUnNumeroParYElTripleDelSiguiente = (x) => x * 2 + (x + 1 * 3);
