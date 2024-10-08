function pickUp(index){
    // let item = model.pickUpItems[index];
    if(model.pickUpItems[index].boss == true){
      
        showBoss();
    }
    else{
        model.inventory.push(model.pickUpItems[index])
        model.pickUpItems.splice(index,1)
        showItems();
    }
   
   
    // console.table('trykt på item: ' + item.name)
    // model.inventory.push(item)
    // model.pickUpItems.splice(index,1);
    // console.log(model.itemView)
    // let tøys = model.itemView.find(x => x.includes(item.img))
    // console.log('prøver å finne riktig item' + tøys)
    // let itemIndex = model.itemView.indexOf(tøys)
    // model.itemView.splice(itemIndex,1)
    // console.log(itemIndex, 'index')

    updateMainView()
}

function getRandomItem(){
   return Math.floor(Math.random() * model.pickUpItems.length)
}

function randomBossFightCheck(index){
    let rng = Math.floor(Math.random() * 10)
    if(rng > 5){
        
    }
}

function increaseHealth(value){
    console.log(value, ' health increase')
    model.healthBar += value;
    if(model.healthBar > 100){
        model.currentLevel ++;
        model.healthBar = 100;
    }

    updateMainView()
}

function increaseCodeSkills(amount){
    console.log(amount, ' code skillz')
    model.levelCode += amount;
    updateMainView()
}

function increaseNkSkills(amount){
    model.levelNK+= amount;
    updateMainView()
}

function areWeDead(){
    if(model.healthBar <= 0){
        return true;
    }
    return false;
}

function getBoss(){
    return model.opponents[model.currentLevel -1];
}

function isBossDead(boss){
    if(boss.health <= 0){
        return true;
    }
    return false;
}

function looseHealth(value){
    model.healthBar -= value;
}

function fightOpponent(opponent){
    if(!isFightOver(opponent))
    {
        opponent.health -= 40;
        statusText = `${opponent.name} took a hit!` 
        if(isBossDead(opponent))
        {
            statusText += `${opponent.name} Died!` 
            model.currentPage = 'fightOverPage'
            completeLevel()
            return;
        }
        BossFightsBack()
    }
    else{
        model.currentPage = 'fightOverPage'
        completeLevel()
    }
    updateMainView()
}

function BossFightsBack(){
    looseHealth(20)
    if(areWeDead()){
        statusText += `${model.userName} Died :( )` 
        model.currentPage = 'gameOverPage'
    }
}

function isFightOver(opponent){
    if(isBossDead(opponent) || areWeDead())
        return true;

    return false;
}

function getRandomCash(){
    return cashMoney[Math.floor(Math.random() * cashMoney.length)]
}

function completeLevel(){
    model.currentLevel++;
    updateMainView()
}

function useInventoryItem(index){    
    let itemToUse = getObjectById(index);
    if(itemToUse.useToTasks == false){
        increaseHealth(itemToUse.healthXp)       
    }else{
        increaseNkSkills(itemToUse.nkSkillz)
        increaseCodeSkills(itemToUse.codeSkillz)
        model.itemUsed.push(itemToUse.name)
    }
    model.inventory.splice(index,1 );
    model.inventoryMode = false;
    showItems();
    showInventory();
    updateMainView()
}

function getObjectById(index){
    return model.inventory[index];
}

function buyEnergyDrink(){
    model.inventory.add( {
        name: 'energidrikk',
        healthXp: 20,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        img: '',
    })
    updateMainView()
}

function buyCoffe(){
    model.inventory.add({
        name: 'kaffe',
        healthXp: 10,
        codeSkillz: 0,
        nkSkillz: 0,
        useToTasks: false,
        img: '',

    })
    updateMainView()
}