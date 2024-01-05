const words = [
  { word: "abacaxi", clue: "Fruta tropical" },
  { word: "elefante", clue: "Animal de grande porte com tromba longa" },
  { word: "computador", clue: "Dispositivo eletrônico" },
  { word: "girafa", clue: "Animal alto, com pescoço longo" },
  { word: "chocolate", clue: "Doce feito de cacau" },
  { word: "piano", clue: "Instrumento musical com teclas" },
  { word: "tigre", clue: "Felino selvagem" },
  { word: "esmeralda", clue: "Tipo de pedra preciosa" },
  { word: "navio", clue: "Embarcação no mar" },
  { word: "telefone", clue: "Dispositivo de comunicação" },
  { word: "floresta", clue: "Área com muitas árvores" },
  { word: "quadrado", clue: "Figura geométrica de quatro lados" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "sorvete", clue: "Doce gelado" },
  { word: "bicicleta", clue: "Veículo de duas rodas" },
  { word: "avião", clue: "Meio de transporte aéreo" },
  { word: "macaco", clue: "Primate arbóreo" },
  { word: "raios", clue: "Descargas elétricas na atmosfera" },
  { word: "montanha", clue: "Elevação natural da terra" },
  { word: "vela", clue: "Objeto para iluminação" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
