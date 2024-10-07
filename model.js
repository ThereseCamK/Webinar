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
        img: '/pictures/coffe.JPG',
        top: 20,
        left: 30,
        level: 1,

    },
    {
        name: 'energidrikk',
        healthXp: 20,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        img: '/pictures/redbull.jpg',
        level: 1
    },
    {
        name: 'tastatur',
        healthXp: 0,
        codeSkillz: 10,
        nkSkillz: 0,
        useToTasks: true,
        img: '/pictures/keyboard.jpg',
        level: 2
    },
    {
        name: 'mikrofon',
        healthXp: 0,
        codeSkillz: 0,
        nkSkillz: 10,
        useToTasks: true,
        img: '/pictures/mic.jpeg',
        level: 2
    },
],
bagview: '',
inventory: [],
pages: ['fightOverPage', 'gameOverPage', 'startPage', 'fightPage'],

opponents:[
    {
        name: 'Terje',
        img: '',
        codeMaster: true, // false er lik NkMaster
        health: 100
    },
    {
        name: 'Eskil',
        img: '',
        codeMaster: false,
        health: 100
    },
],

}