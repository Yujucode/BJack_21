let smoli = document.querySelector('#smolito');
let compupuntos = document.querySelector('#compuPuntos');
const boton = document.querySelector('#btnpedir');
const divjugadorcartas = document.querySelector('#jugador-cartas');
const divcomputadoracartas = document.querySelector('#computadora-cartas');
const botonnuevo = document.querySelector('#btnnuevo');

const botonDetener = document.querySelector('#btndetener');

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const figuras = ['A', 'J', 'Q', 'K'];

let puntosjugador = 0;
let puntoscomputadora = 0;

//referenica html
const btnpedir = document.querySelector('#btnpedir');
let smolito = document.querySelector('#smolito');
///crear una nueva baraja
const crearDeck = () => {
  //   for (i = 2; i < 11; i++) {
  //     deck.push(i + 'C');
  //     deck.push(i + 'H');
  //   }
  for (i = 2; i < 11; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let figura of figuras) {
      deck.push(figura + tipo);
    }
  }
  //console.log(deck);
  deck = _.shuffle(deck); ///d la biblioteca underscore
  console.log(deck);

  deck = _.shuffle(deck); ///d la biblioteca underscore
  console.log(deck);

  deck = _.shuffle(deck); ///d la biblioteca underscore
  console.log(deck);

  return deck;
};
crearDeck();

//esta funcion permite pedir carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'no hay cartas en el deck';
  }

  const carta = deck.pop();
  console.log(deck);
  console.log(carta); //debe de ser de la baraj
  return carta;
};
//deck = [];
//pedirCarta();

const valorcarta = (carta) => {
  //const valor=carta[0]///ojo todos los strings pueden ser trabajados como arreglos-me jala el primer digito
  const valor = carta.substring(0, carta.length - 1);

  /*
  let puntos = 0;
  console.log(valor);
  if (isNaN(valor)) {
    ///isNaN devuelve true o false--->si no es numero devuelve true
    console.log('no es un numero');
    puntos = valor === 'A' ? 11 : 10;
  } else {
    console.log(' es un numero');
    puntos = valor * 1;
  }
  // string se pinta como negro en la consola...si es morado es un entero, para pasarlo a numero es sencillo se multiplica x1
*/

  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};

//console.log(puntos);
// const valor1 = valorcarta(pedirCarta());
// console.log('primer valor' + valor1);
/*
function presionar() {
  const carta2 = pedirCarta();
  //let valoree = valorcarta(carta2);

  console.log('hola--' + carta2);
  //console.log('holavalore--' + valoree);
  puntosjugador = puntosjugador + valorcarta(carta2);
  console.log('pj--' + puntosjugador);

  smoli.innerText = puntosjugador;
}
*/

botonDetener.addEventListener('click', () => {
  boton.disabled = true;
  botonDetener.disabled = true;
  turnocomputadora(puntosjugador);
});

boton.addEventListener('click', () => {
  const carta2 = pedirCarta();
  //let valoree = valorcarta(carta2);

  console.log('hola--' + carta2);
  //console.log('holavalore--' + valoree);
  puntosjugador = puntosjugador + valorcarta(carta2);
  console.log('pj--' + puntosjugador);

  smoli.innerText = puntosjugador;

  const imgcarta = document.createElement('img');
  // imgcarta.src = 'prof_her/assets/cartas/' + carta2 + '.png';

  imgcarta.src = `assets/cartas/${carta2}.png`;
  imgcarta.classList.add('CARTA');

  divjugadorcartas.append(imgcarta);
  // <img class="CARTA" src="prof_her/assets/cartas/10C.png" alt="" />;

  if (puntosjugador > 21) {
    btnpedir.disabled = true;
    botonDetener.disabled = true;
    // turnocomputadora(puntosjugador);
  } else if (puntosjugador === 21) {
    btnpedir.disabled = true;
    botonDetener.disabled = true;

    // turnocomputadora(puntosjugador);
  }

  setTimeout(() => {
    if (puntosjugador === 21) {
      alert('Ganaste sacaste 21!');
    } else if (puntosjugador > 21) {
      alert('Volaste!');
    }
  }, 100);
});

const turnocomputadora = (puntosminimos) => {
  do {
    const carta3 = pedirCarta();

    puntoscomputadora = puntoscomputadora + valorcarta(carta3);
    console.log('pj--' + puntoscomputadora);

    compupuntos.innerText = puntoscomputadora;

    const imgcarta = document.createElement('img');
    // imgcarta.src = 'prof_her/assets/cartas/' + carta2 + '.png';

    imgcarta.src = `assets/cartas/${carta3}.png`;
    imgcarta.classList.add('CARTA');
    if (puntosminimos > 21) {
      break;
    }

    divcomputadoracartas.append(imgcarta);
  } while (puntoscomputadora < puntosminimos && puntosminimos <= 21);

  setTimeout(() => {
    if (puntoscomputadora > 21 && puntosjugador <= 21) {
      alert('gana Jugador 1');
    } else if (
      puntosjugador === puntoscomputadora ||
      puntoscomputadora > puntosjugador
    ) {
      alert('gana la Computadora');
    } else if (puntosjugador > puntoscomputadora) {
      alert('gana Jugador');
    }
  }, 100);
};

botonnuevo.addEventListener('click', () => {
  location.reload();
});
