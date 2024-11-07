
 function checkIfQuestionIsCorrect(index, bossIndex, correctIndex,bossMaster){
     if(correctIndex == index){
        correctAnswer(bossIndex, bossMaster)
     }
     else{
         wrongAnswer();
     }
     updateView()
 }

function wrongAnswer() {
    model.healthBar -= 20;
    if (model.currentBoss.name == 'Eskil') {
        looseNk();
    }
    else {
        looseCodeSkillz();
    }
    areWeDead();
}

 function correctAnswer(bossIndex,bossMaster){
    if(bossMaster == 'codeQestions'){
        model.levelCode += 10;
     }
     else {
         model.levelNK += 10;    
     }
      model.opponents[bossIndex].health -= 30;
      model.opponents[bossIndex].level ++;
      isBossDead(bossIndex) 
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