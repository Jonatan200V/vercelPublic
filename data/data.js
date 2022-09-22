const data = [
  {
    id: "1",
    monstruo: "DIOS",
    nivel: "10",
    atk: "XXXX",
    def: "XXXX",
    name: "Slifer el Dragon del Cielo",
    attribute: "DIOS",
    description:
      "La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar cartas ni efectos. Una vez por turno, durante la End Phase, si esta carta fue Invocada de Modo Especial: mándala al Cementerio. Gana 1000 ATK/DEF por cada carta en tu mano.",
    image: "../assets/imageDios.jpg",
  },
  {
    id: "2",
    monstruo: "DIOS",
    nivel: "10",
    atk: "XXXX",
    def: "XXXX",
    name: "Obelisk el Atormentador",
    attribute: "DIOS",
    description:
      "Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar cartas ni efectos. Ningún jugador puede seleccionar esta carta con efectos de cartas. Una vez por turno, durante la End Phase, si esta carta fue Invocada de Modo Especial: mándala al Cementerio. Puedes Sacrificar 2 monstruos; destruye todos los monstruos que controle tu adversario. Esta carta no puede declarar un ataque en el turno en el que este efecto es activado. ",
    image: "../assets/imageDios2.jpg",
  },
  {
    id: "3",
    monstruo: "DIOS",
    nivel: "10",
    atk: "XXXX",
    def: "XXXX",
    name: "El Dragon Alado de Ra",
    attribute: "DIOS",
    description:
      "No puede ser Invocado de Modo Especial. Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar otras cartas ni efectos. Cuando esta carta es Invocada de Modo Normal: puedes pagar LP hasta que sólo te queden 100; esta carta gana ATK/DEF iguales a la cantidad de LP pagados. Puedes pagar 1000 LP, y después seleccionar 1 monstruo en el Campo; destruye ese objetivo. ",
    image: "../assets/imageDios3.jpg",
  },
  {
    id: "4",
    monstruoattr: "Lanzador de Conjuros",
    monstruo: "Normal",
    nivel: "7",
    name: "Dark Magician",
    atk: "2500",
    def: "2000",
    attribute: "Dark",
    description:
      "El más grande de los magos en cuanto al ataque y la defensa.  ",
    image: "../assets/imageDarkMagician.jpg",
  },
  {
    id: "5",
    monstruoattr: "Dragon",
    monstruo: "Normal",
    nivel: "7",
    name: "Red Eyes",
    atk: "2400",
    def: "2000",
    attribute: "Dark",
    description: "Un dragon feroz con un ataque mortal ",
    image: "../assets/imageRedEyes.jpg",
  },
  {
    id: "6",
    monstruoattr: "Roca",
    monstruo: "Efecto",
    nivel: "3",
    name: "Cyber Jarra",
    atk: "900",
    def: "900",
    attribute: "Dark",
    description:
      "VOLTEO: Destruye todos los monstruos en el Campo, y después, ambos jugadores muestran las 5 cartas de la parte superior de sus Decks, y después Invocan de Modo Especial todos los monstruos mostrados que sean de Nivel 4 o menor, en Posición de Ataque boca arriba o en Posición de Defensa boca abajo, y además añaden el resto de las cartas a sus manos. (Si algún jugador tiene menos de 5 cartas en su Deck, muestra tantas como sea posible). ",
    image: "../assets/imageCyberJarra.jpg",
  },
  {
    id: "7",
    tipo: "Spell",
    name: "Pot of Greed",
    speed: "normal",
    attribute: "Spell",
    description: "Roba 2 cartas",
    image: "../assets/imagePotOfGreed.jpg",
  },
  {
    id: "8",
    tipo: "Spell",
    name: "Raigeki",
    attribute: "Spell",
    speed: "normal",

    description: "Destruye todos los monstruos de tu adversario",
    image: "../assets/imageRaigeki.jpg",
  },
  {
    id: "9",
    monstruoattr: "Maquina",
    monstruo: "Efecto",
    nivel: "5",
    name: "Cyber Dragon",
    atk: "2100",
    def: "1600",
    attribute: "Luz",
    description:
      "Si tu adversario controla un monstruo, puedes invocar de Modo Especial (Desde tu Mano)",
    image: "../assets/imageDragonCibernetico.jpg",
  },
  {
    id: "10",
    tipo: "Spell",

    name: "Tifon Del Espacio Mistico",
    speed: "rapido",

    attribute: "Spell",
    description:
      "Selecciona 1 Magica/Trampa en el campo; destruye ese objetivo",
    image: "../assets/imageTifon.jpg",
  },
  {
    id: "11",
    tipo: "Trampa",

    name: "Fuerza de Espejo",
    speed: "trampanormal",

    attribute: "Trampa",
    description:
      "Cuando el mostruo de tu adversario declara un ataque:destruye todods los monstruos en Posicion de Ataque de tu adversario",
    image: "../assets/imageMirrorForce.jpg",
  },
  {
    id: "12",
    monstruoattr: "Hada",
    monstruo: "Efecto",
    nivel: "1",
    name: "Kuriboh Alado",
    atk: "300",
    def: "200",
    attribute: "Luz",
    description:
      "Si esta carta en el Campo es destruida y mandada al Cementerio: por el resto de este turno no recibes daño de batalla.",
    image: "../assets/imageKuribohAlado.jpg",
  },
  {
    id: "13",
    tipo: "Spell",

    name: "Agujero Oscuro",
    speed: "normal",

    attribute: "Spell",
    description: "Destruye todos los monstruos en el campo",
    image: "../assets/imageDarkHole.jpg",
  },
  {
    id: "14",
    tipo: "Spell",

    name: "Unidos Resistiremos",
    speed: "equipo",

    attribute: "Spell",
    description:
      "Selecciona un monstruo en el campo:Por cada carta monstruo que controles este monstruo gana 800ATK y 800DEF",
    image: "../assets/imageSiempreUnidos.jpg",
  },
  {
    id: "15",
    tipo: "Spell",

    name: "Renace el Monstruo",
    speed: "normal",

    attribute: "Spell",
    description:
      "Selecciona 1 monstruo en cualquier Cementerio; Invócalo de Modo Especial.",
    image: "../assets/imageMonsterReborn.jpg",
  },
  {
    id: "16",
    tipo: "Trampa",
    name: "Kunai Con Cadena",
    speed: "trampanormal",
    attribute: "Trampa",
    description:
      "Activa 1 o ambos de estos efectos (simultaneamente): Cuando un monstruo del adversario declara un ataque selecciona el monstruo atacante;cambia ese objetivo a Posicion de Defensa. /Selecciona 1 monstruoo boca arriba que controles;equipa esta carta a ese objetivo.Este gana 500ATK",
    image: "../assets/imageKunai.jpg",
  },
  {
    id: "17",
    tipo: "Spell",
    name: "Viento Fuerte",
    attribute: "Spell",
    speed: "normal",
    description:
      "Devuelve a la mano todas las cartas magicas y de trampas de los jugadores",
    image: "../assets/imageVientoFuerte.jpg",
  },
  {
    id: "18",
    tipo: "Trampa",
    name: "Cadenas",
    speed: "trampanormal",

    attribute: "Trampa",
    description:
      "Selecciona un monstruo:Este pierde 700ATK y no puede realizar ataques",
    image: "../assets/imageCadenas.jpg",
  },
  {
    id: "19",
    tipo: "Spell",
    name: "Hacha Reforzada",
    attribute: "Spell",
    speed: "equipo",
    description:
      "Selecciona un monstruo:Gana 1000ATK durante cada stanby phase pierde 1000 de vida para mantener esta carta",
    image: "../assets/imageHacha.jpg",
  },
  {
    id: "20",
    tipo: "Spell",
    name: "Graciosa Caridad",
    attribute: "Spell",
    description: "Roba 3 cartas y descarta 2",
    image: "../assets/imageCaridad.jpg",
  },
  {
    id: "21",
    tipo: "Spell",
    name: "Entierro Prematuro",
    speed: "trampanormal",
    attribute: "Spell",
    description: "Selecciona una carta de tu deck y mandala al cementerio",
    image: "../assets/imageEntierro.jpg",
  },
  {
    id: "22",
    tipo: "Spell",
    name: "Cambio de Cartas",
    speed: "normal",
    attribute: "Spell",
    description:
      "Ambos jugadores deben descartar toda su mano y robar la misma cantidad de cartas que tenian",
    image: "../assets/imageCambioCartas.jpg",
  },
  {
    id: "23",
    tipo: "Spell",
    name: "Escudo y Espada",
    speed: "normal",
    attribute: "Spell",
    description: "Cambia la DEF por el ATK y el ATK por la DEF",
    image: "../assets/imageCambio.jpg",
  },
  {
    id: "24",
    monstruoattr: "Guerrero",
    monstruo: "Efecto",
    nivel: "4",
    name: "Gearfried el Caballero de Hierro",
    atk: "1800",
    def: "1600",
    attribute: "Tierra",
    description:
      "Si cualquier jugador equipa una o mas cartas de equipo a esta carta: destruye esas cartas de equipo.",
    image: "../assets/imageGerfried.jpg",
  },
  {
    id: "25",
    monstruoattr: "Guerrero",
    monstruo: "Efecto",
    nivel: "5",
    name: "El espadachin de la Llama",
    atk: "1800",
    def: "1600",
    attribute: "Fuego",
    description:
      "Una vez por turno, durante la Battle Phase de cualquier jugador: puedes seleccionar otro monstruo de Tipo Guerrero que controles; esta carta pierde exactamente 600 ATK y, si lo haces, ese monstruo gana 600 ATK. Cuando esta carta que controlas es destruida por una carta de tu adversario y mandada a tu Cementerio (en batalla o por efecto de una carta): puedes desterrar esta carta de tu Cementerio, y después seleccionar 1 monstruo de FUEGO de Tipo Guerrero en tu Cementerio; Invoca ese objetivo de Modo Especial.",
    image: "../assets/imageEspadachin.jpg",
  },
  {
    id: "26",
    tipo: "Spell",
    name: "Espadas de la Luz Reveladora",
    speed: "continua",
    attribute: "Spell",
    description: "Tu adversario no puede atacarte por 3 turnos",
    image: "../assets/imageEspadas.jpg",
  },
];
module.exports = data;
