const model = {
// backgroundImages
// itemImages 
userName: '',
userImg: 'pictures/twoHeads.jpg',
currentPage: '',
statusText: 'Two girls ready to go on an adventure!',
currentLevel: 1,
healthBar: 90,
cashMoney:[1,5,10,50],
itemTop: 75,// min 10, max 70
itemLeft: 60, // min 1, max 60
moneyBank: 0,
levelNK : 30,
levelCode: 60,
itemView: '',
inventoryMode: false,
backgroundImgs:['pictures/dungeon.png', 'pictures/forest.png', 'pictures/lair.png', 'pictures/mountains.png'],
pickUpItems:[
    {
        name: 'kaffe',
        healthXp: 10,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        boss: false,
        img: '/pictures/coffee.png',
        level: 1,

    },
    {
        name: 'energidrikk',
        healthXp: 20,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        boss: false,
        img: '/pictures/redbull.png',
        level: 1
    },
    {
        name: 'busk',
        healthXp: 0,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        boss: true,
        img: '/pictures/busk.png',
        level: 2
    },
    {
        name: 'tastatur',
        healthXp: 0,
        codeSkillz: 10,
        nkSkillz: 0,
        useToTasks: true,
        img: '/pictures/keyboard.png',
        level: 2
    },
    {
        name: 'mikrofon',
        healthXp: 0,
        codeSkillz: 0,
        nkSkillz: 10,
        useToTasks: true,
        img: '/pictures/mic.png',
        level: 2
    },
],
bagview: '',
inventory: [],
itemUsed: [],
pages: ['fightOverPage', 'gameOverPage', 'startPage', 'fightPage'],
codeQuestions: [
    {
      question: "Hva brukes `let` til i JavaScript?",
      options: ["Definere en konstant", "Definere en variabel med blokk-scope", "Definere en funksjon"],
      correctAnswer: 1 // Index for riktig svar
    },
    {
      question: "Hva returnerer `typeof`-operatoren?",
      options: ["Datatypen til en verdi", "Verdien av en variabel", "Navnet på en funksjon"],
      correctAnswer: 0
    },
    {
      question: "Hva er forskjellen mellom `==` og `===` i JavaScript?",
      options: [
        "`==` sjekker om verdier er like, mens `===` sjekker både verdi og datatype",
        "De fungerer på samme måte",
        "`===` er kun brukt for strenger"
      ],
      correctAnswer: 0
    },
    {
      question: "Hvordan definerer man en funksjon i JavaScript?",
      options: ["function myFunction() { }", "def myFunction() { }", "fn myFunction() { }"],
      correctAnswer: 0
    },
    {
      question: "Hva gjør `console.log()` i JavaScript?",
      options: ["Stopper koden", "Skriver tekst til nettleserkonsollen", "Starter en server"],
      correctAnswer: 1
    }
  ],
  nkQuestions:[
    {
      question: "Hva kjennetegner et growth mindset?",
      options: [
        "Troen på at ferdigheter og intelligens er fast og ikke kan endres",
       
        "Troen på at man bare trenger talent for å lykkes",
        "Troen på at ferdigheter og intelligens kan utvikles med innsats og læring",
      ],
      correctAnswer: 2
    },
    {
      question: "Hvordan bør du håndtere feil og tilbakeslag hvis du har et growth mindset?",
      options: [
        "Se på feil som en mulighet til å lære og forbedre seg",
        "Gi opp fordi du ikke er god nok",
       
        "Ignorere feilene og prøve å unngå dem i fremtiden"
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er en god vane for å utvikle et growth mindset?",
      options: [
        "Unngå å utfordre deg selv for å unngå feil",
        "Søke tilbakemeldinger og bruke det til å forbedre seg",
        "Sammenligne deg med andre og prøve å være bedre enn dem"
      ],
      correctAnswer: 1
    },
    {
      question: "Hvordan kan du bruke tilbakemeldinger konstruktivt?",
      options: [
        "Ignorere kritikk fordi det ikke er viktig",
       
        "Unngå tilbakemeldinger for å beskytte selvtilliten din",
        "Bruke tilbakemeldingene som en kilde til vekst og forbedring",
      ],
      correctAnswer: 2
    },
    {
      question: "Hvordan ser en person med growth mindset på utfordringer?",
      options: [
        "De ser utfordringer som en mulighet til å vokse og lære",
        "De unngår utfordringer fordi de frykter å feile",

        "De tar utfordringer bare når de er sikre på at de kan vinne"
      ],
      correctAnswer: 0
    }
  ],
opponents:[
    {
        name: 'Terje',
        img: '/pictures/terje.png',
        codeMaster: true, // false er lik NkMaster
        health: 100,
        level: 0,
        equipmentNeedToTask: 'tastatur',
    },
    {
        name: 'Eskil',
        img: '/pictures/eskil.png',
        codeMaster: false,
        health: 100,
        level: 0,
        equipmentNeedToTask: 'mikrofon',
    },
],

}