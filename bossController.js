
 function checkIfQuestionIsCorrect(index, bossIndex, correctIndex,bossMaster){
   console.log(bossMaster + 'bossMaster')
     if(correctIndex == index){
        if(bossMaster == 'codeQestions'){
           model.levelCode += 10;
        }
        else {
            model.levelNK += 10;    
        }
         model.opponents[bossIndex].health -= 30;
         model.opponents[bossIndex].level ++;
         isBossDead(bossIndex)      
         //showQuestion( model.opponents[bossIndex].level,bossMaster,bossIndex)  
     }
     else{
         model.healthBar -=20;     
         if(model.currentBoss.name == 'Eskil'){
            looseNk();
        }
        else{
            looseCodeSkillz();
        }  
         areWeDead()
     }
     updateView()
 }

 function isBossDead(boss){
    if(model.opponents[boss].health <= 0){
            
        model.currentLevel ++;
        model.itemView = '<h1>Boss er Død! Gratulerer!! </h1>';
        model.currentBoss = '';
        model.currentPage = 'startPage';    
    }
    else{
        model.currentPage = 'fightPage'
      
    }
    updateView();
}
 
function getBoss(){
    return model.opponents[model.currentLevel -2];
}
//Disse er ikke i bruk: 

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
    updateView()
}

function BossFightsBack(){
    looseHealth(20)
    if(model.currentBoss.name == 'Eskil'){
        looseNk();
    }
    else{
        looseCodeSkillz();
    }
    let res = areWeDead();
    if(res == true){
       updateView();
    }
}

function isFightOver(opponent){
    if(isBossDead(opponent) || areWeDead())
        return true;

    return false;
}
 