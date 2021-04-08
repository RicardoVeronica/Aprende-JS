// nuevo mecanismo que permite crear un objeto basado en un objeto literal inicial
// Hace una vinculacion directa entre el obj original y la instancia
const name = "",
  last_name = "",
  age = "";

const person = {
  name,
  last_name,
  age,
};

const handler = {
  set(obj, prop, value) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      // indexOf return -1, 0, 1
      return console.error(
        `La propiedad "${prop}" no existe en el obj original`
      );
    }

    obj[prop] = value;
  },
};

const set = new Proxy(person, handler);
set.name = "set";
set.last_name = "Duran";
set.age = 35;
set.mail = "hola@ricardoveronica";

console.log(set);
console.log(person);
