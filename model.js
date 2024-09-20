const model = {
// backgroundImages
// itemImages 
userName: '',
userImg: 'pictures/twoHeads.jpg',
currentPage: '',
statusText: 'Two girls ready to go on an adventure!',
currentLevel: 1,
healthBar: 100,
cashMoney:[1,5,10,50],
moneyBank: 0,
levelNK : 30,
levelCode: 60,
backgroundImgs:['pictures/dungeon.png', 'pictures/forest.png', 'pictures/lair.png', 'pictures/mountains.png'],
pickUpItems:[
    {
        name: 'kaffe',
        healthXp: 10,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        img: '',

    },
    {
        name: 'energidrikk',
        healthXp: 20,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        img: '',
    },
    {
        name: 'tastatur',
        healthXp: 0,
        codeSkillz: 10,
        nkSkillz: 0,
        useToTasks: true,
        img: '',
    },
    {
        name: 'mikrofon',
        healthXp: 0,
        codeSkillz: 0,
        nkSkillz: 10,
        useToTasks: true,
        img: '',
    },
],
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