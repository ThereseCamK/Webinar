function getRandomItem(){
    return Math.floor(Math.random() * model.pickUpItems.length)
 }
function pickUp(index){
    if(model.pickUpItems[index].boss == true){
        model.currentPage = 'fightPage'     
    }
    else{
        model.itemsPickedUp++;
        model.inventory.push(model.pickUpItems[index])
        model.pickUpItems.splice(index,1)
        model.currentPage = 'startPage'
    }
    if(model.itemsPickedUp == 2 && model.levelBossDefeated){
        completeLevel();  
    }
    updateView();
}

function useInventoryItem(index){    
    let itemToUse = getObjectById(index);
    if(itemToUse.useToTasks == false){
        increaseHealth(itemToUse.healthXp)       
    }else{
        model.itemUsed.push(itemToUse.name)
        model.itemView += '<div>Du har brukt det du trenger til å bekjempe en boss!</div>'
        //Printe ut du har brukt et special item ELNS
    }
    model.inventory.splice(index,1 );
   updateMainView()
}

function increaseHealth(value){   
    model.healthBar += value;
    if(model.healthBar>100){
        model.healthBar = 100;
    }
    updateView()
}
function completeLevel(){
    model.itemsPickedUp == 0;
    model.currentLevel++;
    model.levelBossDefeated = false;   
    updateView()
}

function increaseCodeSkills(amount){
    console.log(amount, ' code skillz')
    model.levelCode += amount;
    updateView()
}

function increaseNkSkills(amount){
    model.levelNK+= amount;
    updateView()
}

function areWeDead(){
    if(model.healthBar <= 0){
       model.currentPage = 'gameOver'
       updateView();
    }  
}

function looseHealth(value){
    model.healthBar -= value;
    updateView()
}

function looseNk(){
    model.levelNK -= 10;
    updateView()
}
function looseCodeSkillz(){
    model.levelCode -= 10;
    updateView()
}
function getObjectById(index){
    return model.inventory[index];
}

