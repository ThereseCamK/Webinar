function pickUp(index){
    console.log(index)
    let item = model.pickUpItems[index];
    model.inventory.push(item)
    model.pickUpItems.splice(index,1);
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
    model.healthBar += value;
    updateMainView()
}

function increaseCodeSkills(){
    model.levelCode++;
    updateMainView()
}

function increaseNkSkills(){
    model.levelNK++;
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

function useInventoryItem(itemToUse){
    if(itemToUse.useToTasks == true){
        increaseHealth(itemToUse.healthXp)
    }else{
        increaseNkSkills(itemToUse.nkSkillz)
        increaseCodeSkills(itemToUse.codeSkillz)
    }
    updateMainView()
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