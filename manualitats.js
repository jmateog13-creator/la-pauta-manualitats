// Generat per paper-toy/manualitat1.py: no l'editis a mà.
const MANUALITATS = {
 "guido": {
  "tipus": "roda",
  "concepte": "El nom de les notes",
  "titol": "Les notes de Guido",
  "parts": [
   [
    "UT",
    "Ut queant laxis"
   ],
   [
    "RE",
    "Resonare fibris"
   ],
   [
    "MI",
    "Mira gestorum"
   ],
   [
    "FA",
    "Famuli tuorum"
   ],
   [
    "SOL",
    "Solve polluti"
   ],
   [
    "LA",
    "Labii reatum"
   ]
  ],
  "apren": "Guido va agafar la primera síl·laba de cada vers d'un himne. L'«UT» avui és «DO»!"
 },
 "hildegard": {
  "tipus": "tira",
  "concepte": "Monodia i melisma",
  "titol": "Quantes notes té cada síl·laba?",
  "parts": [
   [
    "O",
    "1 síl·laba = 1 nota",
    1
   ],
   [
    "vir",
    "1 síl·laba = 1 nota",
    1
   ],
   [
    "tus",
    "1 síl·laba = 7 notes!",
    7
   ],
   [
    "MELISMA",
    "moltes notes per a una sola síl·laba",
    0
   ]
  ],
  "apren": "Quan una sola síl·laba es canta amb moltes notes, es diu MELISMA. Hildegard en feia molts."
 },
 "sibilla": {
  "tipus": "solapa",
  "concepte": "Veu solista i interludi",
  "fora": [
   "El Cant de la Sibil·la",
   "Qui canta? Aixeca la solapa!"
  ],
  "dins": [
   [
    "ESTROFA",
    "Canta UNA sola veu: la solista, amb l'espasa aixecada."
   ],
   [
    "INTERLUDI",
    "Calla la veu i toca l'orgue una petita música."
   ]
  ],
  "apren": "Una cançó pot alternar ESTROFES (la veu) i INTERLUDIS (els instruments)."
 },
 "josquin": {
  "tipus": "tira",
  "concepte": "Polifonia imitativa",
  "titol": "Les veus s'imiten",
  "parts": [
   [
    "Veu 1",
    "comença la melodia",
    1
   ],
   [
    "Veu 2",
    "entra i copia la mateixa melodia",
    2
   ],
   [
    "Veu 3",
    "també l'imita",
    3
   ],
   [
    "Totes!",
    "tres melodies alhora: POLIFONIA",
    3
   ]
  ],
  "apren": "POLIFONIA = diverses melodies alhora. Si s'imiten l'una a l'altra, és imitativa."
 },
 "dowland": {
  "tipus": "solapa",
  "concepte": "Melodia acompanyada",
  "fora": [
   "Flow, my tears",
   "Què se sent? Aixeca la solapa!"
  ],
  "dins": [
   [
    "MELODIA",
    "La veu canta la melodia, la part que recordes i taral·leges."
   ],
   [
    "ACOMPANYAMENT",
    "El llaüt fa acords per sota i l'ajuda a sonar."
   ]
  ],
  "apren": "MELODIA ACOMPANYADA = una melodia principal i un instrument que l'acompanya."
 },
 "fletxa": {
  "tipus": "tira",
  "concepte": "Música descriptiva",
  "titol": "La Bomba: un viatge en vaixell",
  "parts": [
   [
    "1",
    "Mar en calma: tothom canta tranquil",
    0
   ],
   [
    "2",
    "TEMPESTA! les veus fan onades i vent",
    0
   ],
   [
    "3",
    "Preguen perquè passi la tempesta",
    0
   ],
   [
    "4",
    "Arriben a port: festa!",
    0
   ]
  ],
  "apren": "La música DESCRIPTIVA explica una història o imita sons: vent, onades, crits…"
 },
 "vivaldi": {
  "tipus": "roda",
  "concepte": "Solo i tutti",
  "titol": "Qui toca ara?",
  "parts": [
   [
    "TUTTI",
    "tota l'orquestra"
   ],
   [
    "SOLO",
    "el violí sol: els ocells"
   ],
   [
    "TUTTI",
    "tota l'orquestra"
   ],
   [
    "SOLO",
    "el violí sol: la font"
   ]
  ],
  "apren": "TUTTI = toquen tots. SOLO = toca un sol instrument. Vivaldi els va alternant."
 },
 "bach": {
  "tipus": "roda",
  "concepte": "La fuga",
  "titol": "Com funciona una fuga?",
  "parts": [
   [
    "VEU 1",
    "canta el TEMA"
   ],
   [
    "VEU 2",
    "entra amb el mateix tema"
   ],
   [
    "VEU 3",
    "també entra amb el tema"
   ],
   [
    "FUGA!",
    "les tres veus es persegueixen"
   ]
  ],
  "apren": "FUGA = un tema curt que passa d'una veu a una altra, com si es perseguissin."
 },
 "cabanilles": {
  "tipus": "tira",
  "concepte": "Els registres de l'orgue",
  "titol": "Quin so tria l'organista?",
  "parts": [
   [
    "Flautat",
    "so suau, com una flauta",
    0
   ],
   [
    "Trompeta",
    "so fort i brillant",
    0
   ],
   [
    "Batalla",
    "tubs horitzontals: sona com una guerra!",
    0
   ],
   [
    "Ple",
    "tots els tubs alhora",
    0
   ]
  ],
  "apren": "Els REGISTRES de l'orgue canvien el TIMBRE: el mateix instrument pot sonar de moltes maneres."
 },
 "haydn": {
  "tipus": "solapa",
  "concepte": "La dinàmica: piano i forte",
  "fora": [
   "p  ·  piano",
   "Tot sona fluixet… tothom s'adorm. Zzz. Aixeca la solapa!"
  ],
  "dins": [
   [
    "ff · FORTISSIMO",
    "PUM! Un cop fortíssim de tota l'orquestra."
   ],
   [
    "SORPRESA!",
    "Per això es diu la «Simfonia de la sorpresa»."
   ]
  ],
  "apren": "La DINÀMICA és si la música sona fluix (p, piano) o fort (f, forte)."
 },
 "mozart": {
  "tipus": "solapa",
  "concepte": "La frase: pregunta i resposta",
  "fora": [
   "PREGUNTA ?",
   "La música fa una pregunta i es queda en l'aire… Aixeca la solapa!"
  ],
  "dins": [
   [
    "RESPOSTA !",
    "Una altra frase li respon i la música s'acaba tranquil·la."
   ],
   [
    "FRASE",
    "Pregunta + resposta: com quan parlem."
   ]
  ],
  "apren": "Una FRASE musical té pregunta i resposta, igual que una conversa."
 },
 "martin": {
  "tipus": "solapa",
  "concepte": "L'òpera",
  "fora": [
   "Una cosa rara",
   "Obre el teló! Aixeca la solapa."
  ],
  "dins": [
   [
    "ÒPERA",
    "Teatre on els personatges parlen cantant."
   ],
   [
    "QUI HI HA?",
    "Tot això fa falta per muntar una òpera."
   ]
  ],
  "apren": "L'ÒPERA ajunta teatre i música: els personatges canten la història."
 },
 "beethoven": {
  "tipus": "tira",
  "concepte": "El motiu rítmic",
  "titol": "Ta-ta-ta-TAAA!",
  "parts": [
   [
    "Motiu",
    "3 notes curtes i 1 de llarga",
    0
   ],
   [
    "Fort",
    "el motiu sona fortíssim",
    0
   ],
   [
    "Fluix",
    "el motiu sona fluixet",
    0
   ],
   [
    "Tota la simfonia",
    "el motiu torna una i altra vegada",
    0
   ]
  ],
  "apren": "Un MOTIU és una idea curta que el compositor repeteix i transforma."
 },
 "chopin": {
  "tipus": "roda",
  "concepte": "El tempo",
  "titol": "A quina velocitat?",
  "parts": [
   [
    "LENTO",
    "molt a poc a poc"
   ],
   [
    "ANDANTE",
    "caminant"
   ],
   [
    "ALLEGRO",
    "ràpid i alegre"
   ],
   [
    "PRESTO",
    "molt ràpid!"
   ],
   [
    "RUBATO",
    "s'estira i s'arronsa"
   ]
  ],
  "apren": "El TEMPO és la velocitat. Amb el RUBATO, Chopin l'estirava i l'arronsava."
 },
 "tarrega": {
  "tipus": "pla",
  "concepte": "La guitarra",
  "titol": "Les parts de la guitarra",
  "apren": "La guitarra té 6 cordes. Tàrrega va fer que fos un instrument de concert."
 },
 "debussy": {
  "tipus": "pla",
  "concepte": "L'escala pentatònica",
  "titol": "Toca només les tecles negres",
  "apren": "Una escala PENTATÒNICA té 5 notes. Les tecles negres en són una!"
 },
 "schoenberg": {
  "tipus": "roda",
  "concepte": "La sèrie de 12 notes",
  "titol": "Cap nota es repeteix!",
  "parts": [
   [
    "DO",
    "nota 1 de 12"
   ],
   [
    "FA#",
    "nota 2 de 12"
   ],
   [
    "RE",
    "nota 3 de 12"
   ],
   [
    "LA",
    "nota 4 de 12"
   ],
   [
    "MIb",
    "nota 5 de 12"
   ],
   [
    "SI",
    "nota 6 de 12"
   ],
   [
    "FA",
    "nota 7 de 12"
   ],
   [
    "DO#",
    "nota 8 de 12"
   ],
   [
    "SOL#",
    "nota 9 de 12"
   ],
   [
    "MI",
    "nota 10 de 12"
   ],
   [
    "SIb",
    "nota 11 de 12"
   ],
   [
    "SOL",
    "nota 12 de 12"
   ]
  ],
  "apren": "En una SÈRIE de 12 notes, cap nota torna a sonar fins que han sonat totes."
 },
 "albeniz": {
  "tipus": "tira",
  "concepte": "L'escala i la música espanyola",
  "titol": "Una escala que sona a Espanya",
  "parts": [
   [
    "MI",
    "comencem",
    0
   ],
   [
    "FA",
    "mig to: sona a flamenc!",
    0
   ],
   [
    "SOL#",
    "salt que sona àrab i andalús",
    0
   ],
   [
    "LA · SI · DO · RE · MI",
    "i pugem fins dalt",
    0
   ]
  ],
  "apren": "Algunes ESCALES tenen un so especial: aquesta sona a música espanyola."
 }
};
