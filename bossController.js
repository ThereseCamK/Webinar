

 function checkIfCodeQuestionIsCorrect(index, bossLevel, bossIndex){
   
     let question = model.codeQuestions[bossLevel]
     if(question.correctAnswer == index){
      
         model.levelCode += 10;
         model.opponents[bossIndex].health -= 30;
         
         model.opponents[bossIndex].level ++;
         isBossDead(bossIndex)
         // må ha en sjekk på helsa til motstadner, bruker og til squillz
     }
     else{
         model.healthBar -=20;
        
         areWeDead()
         
     }
   
     showItems();
  
   
 }
 function checkIfNkQuestionIsCorrect(index, bossLevel, bossIndex){
     let question = model.nkQuestions[bossLevel]
   
     console.log( bossIndex)
     if(question.correctAnswer == index){
         model.levelNK += 10;
         model.opponents[bossIndex].health -= 30;
         model.opponents[bossIndex].level ++;
         isBossDead(bossIndex)
        
     }
     else{
         model.healthBar -=20;
         model.opponents[bossIndex].level ++;
         areWeDead()
     }
 
    
   
 }

 function isBossDead(boss){
    if(model.opponents[boss].health <= 0){
            
        model.currentLevel ++;
        model.itemView = '<h1>Boss er Død! Gratulerer!! </h1>'
    
        updateMainView();
    }
    else{
        showItems();
    }
 
 
}
 
//Disse er ikke i bruk: 

function randomBossFightCheck(index){
    let rng = Math.floor(Math.random() * 10)
    if(rng > 5){
        
    }
}
function getBoss(){
    return model.opponents[model.currentLevel -1];
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
 