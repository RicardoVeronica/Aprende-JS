console.log("----- Elementos -----");

// manejar atributos de elementos
const $linkDom = document.querySelector(".link-dom");
const $html = document.documentElement;

console.log($linkDom.href);
console.log($linkDom.getAttribute("href"));

console.log($html.getAttribute("lang"));
$html.setAttribute("lang", "es-mx");
console.log($html.getAttribute("lang"));

console.log($linkDom.dataset);

console.clear();

console.log($linkDom.style.backgroundColor);
console.log(getComputedStyle($linkDom));

console.clear();

// Forma correcta de crear elementos en html, todo se considera un nodo
const $figure = document.createElement("figure"),
  $image = document.createElement("img"),
  $caption = document.createElement("figcaption"),
  $captionText = document.createTextNode("People"),
  $cards = document.querySelector(".cards");

$figure.appendChild($image);
$figure.classList.add("card");
$image.setAttribute("src", "https://placeimg.com/200/200/people");
$image.setAttribute("alt", "People");

$figure.appendChild($caption);
$caption.appendChild($captionText);

$cards.appendChild($figure);

console.log($figure);

// agregar varios elementos con js vanilla forma correcta
document.write("<h2>Estaciones</h2>"); // agrega siempre al final del body

const estaciones = ["primavera", "varano", "otono", "invierno"];
const $ul = document.createElement("ul");

document.body.appendChild($ul);

estaciones.forEach((estacion) => {
  const $li = document.createElement("li");
  $li.textContent = estacion;
  $ul.appendChild($li);
});

console.log($ul);

document.write("<h2>Continentes</h2>"); // agrega siempre al final del body

// agregar elementos con innerHTML
const continentes = ["america", "africa", "asia", "europa", "oceania"];
const $ul2 = document.createElement("ul");
document.body.appendChild($ul2);
$ul2.innerHTML = ""; // inicializar vacio, concatenar en el forEach

// cada iteracion es una incersion al dom y esto no es optimo, solucion fragments
continentes.forEach((continente) => {
  $ul2.innerHTML += `
    <li>${continente}</li>
  `;
});

console.log($ul2);

// agregar elementos al dom con fragments
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviebre",
  "diciembre",
];

const $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((mes) => {
  const $li = document.createElement("li");
  $li.textContent = mes;
  $fragment.appendChild($li);
});

document.write("<h2>Months of year</h2>");
$ul3.appendChild($fragment); // solo una incersion con el fragment completo
document.body.appendChild($ul3);

console.clear();

// Templates
// se usa $fragment y $cards
const $template = document.getElementById("template-card").content;
const cardContent = [
  {
    title: "Tecnologia",
    img: "http://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "http://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "http://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "http://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "http://placeimg.com/200/200/nature",
  },
];

cardContent.forEach((element) => {
  $template.querySelector("img").setAttribute("src", element.img);
  $template.querySelector("img").setAttribute("alt", element.title);
  $template.querySelector("figcaption").textContent = element.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

console.clear();

// Insertar elementos coolstyle
const $newCard = document.createElement("figure");

$newCard.innerHTML = `
  <img src="http://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

$cards.insertAdjacentElement("beforeend", $newCard);

console.log("---- Eventos ----");

// evento con atributo html MALA PRACTICA
const eventoAtributo = () => {
  console.log("Hello event into html attr");
  console.log(event.target);
};

// evento semantico SE REEMPLAZARON POR addEventListeners
const $btnEvent = document.getElementById("evento-semantico");

const eventoSemantico = (e) => {
  console.log("hello semantic event");
  console.log(e);
};

$btnEvent.onclick = eventoSemantico;

// addEventListeners AGREGA VARIAS FUNCIONES A UN MISMO EVENTO
const $btnMultiple = document.getElementById("evento-multiple");

const eventoMultiple = (e) => {
  console.log(e);
};

$btnMultiple.addEventListener("click", eventoMultiple); // agregar evento
$btnMultiple.removeEventListener("click", eventoMultiple); // eliminar evento

// en cualquier event handler solo se puede pasar el evento como parametro
function saludar(name = "unknow") {
  console.log(`hello ${name}`);
}

// $btnMultiple.addEventListener("click", saludar);

// hack para pasar otros parametros que no sea el event
// tercer parametro, objeto, once:ejecutaUnaVez capture:invierteBubble
$btnMultiple.addEventListener("click", () => saludar("Richard"), {
  once: true,
  capture: true,
});

// delegation para evitar propagation
document.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.matches("#evento-multiple")) {
    console.log("no hay necesidad de stopPropagation");
  }
});
