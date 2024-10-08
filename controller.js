function getRandomItem(){
    return Math.floor(Math.random() * model.pickUpItems.length)
 }
function pickUp(index){
  
    if(model.pickUpItems[index].boss == true){
        showBoss();
    }
    else{
        model.inventory.push(model.pickUpItems[index])
        model.pickUpItems.splice(index,1)
        showItems();
    }
    updateMainView()
}

function useInventoryItem(index){    
    let itemToUse = getObjectById(index);
    if(itemToUse.useToTasks == false){
        increaseHealth(itemToUse.healthXp)       
    }else{
        // increaseNkSkills(itemToUse.nkSkillz)
        // increaseCodeSkills(itemToUse.codeSkillz)
        model.itemUsed.push(itemToUse.name)
    }
    model.inventory.splice(index,1 );
    model.inventoryMode = false;
    showItems();
    showInventory();
 
}

function increaseHealth(value){
    model.healthBar += value;
    if(model.healthBar >= 100){
        model.healthBar = 100;
        completeLevel();
    }

    updateMainView()
}
function completeLevel(){
    model.currentLevel++;
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
        alert('We døde')
    }
    else{
      
    }
    return false;
}



function looseHealth(value){
    model.healthBar -= value;
}


function getRandomCash(){
    return cashMoney[Math.floor(Math.random() * cashMoney.length)]
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