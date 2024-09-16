const model = {



// backgroundImages
// itemImages 
userName: '',
userImg: 'pictures/twoHeads.jpg',
currentPage: '',
currentLevel: 1,
healthBar: 50,
cashMoney:[1,5,10,50],
moneyBank: 0,
levelNK : 0,
levelCode: 0,
backgroundImgs:['pictures/dungeon.png', 'pictures/forest.png', 'pictures/lair.png', 'pictures/mountains.png'],
inventory:[
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



opponents:[
    {
        name: 'Terje',
        img: '',
        codeMaster: true, // false er lik NkMaster
        
    },
    {
        name: 'Eskil',
        img: '',
        codeMaster: false,
    },
],



}