//BossView
function showBoss(){
    let html = ``   
    model.currentBoss = getBoss();

    console.log( model.currentBoss.equipmentNeedToTask)
    html += `
    <div >
            <h1> Du møtte på en boss! </h1>
        <div class="boss">
             Health: ${ model.currentBoss.health}<br>
             Level: ${ model.currentBoss.level}
          
   
            <p>navn: ${ model.currentBoss.name}</p>
               </div>
    `;
   
    html += checkIfYouHaveItemToFightBoss(model.currentBoss);
    html += `</div>`
    return html;
}

function checkIfYouHaveItemToFightBoss(boss) {
    let html = ''
    if (model.itemUsed.includes(boss.equipmentNeedToTask)) {
        html += `
            <img style="height: 600px;" src="${boss.img}"/>        
        `;
        html += checkBoss(boss);
      
    }
    else {
        model.currentPage = 'startPage'
        html += `<h3>Plukk opp det du trenger for å fighte denne bossen</h3>
        <button onclick="updateView()">Tilbake</button>
        `;

    }
    return html;
}

function checkBoss(boss){

    let html = ''
    console.log(boss)
    if(boss.codeMaster == true){
      html +=  showQuestion(boss.level, 'codeQestions', boss)
    }
    else {
       html +=  showQuestion(boss.level, 'nkQuestions', boss)
    }
    return html;

}

function showQuestion(bossLevel, bossMaster){
 
   let html = '';
   let question = '';
   
  console.log(bossMaster + ' bossMaster')
    if(bossMaster == 'codeQestions'){
        question = model.codeQuestions[bossLevel]      
    }
    else {
        question = model.nkQuestions[bossLevel]
    }

    let correctIndex = question.correctAnswer;       
    html += `<div class="question"><h3>${question.question }</h3>`
        for(let i = 0; i < question.options.length; i++){
        html += `<button class="questionButton" onclick="checkIfQuestionIsCorrect(${i},${model.currentLevel-2}, ${correctIndex}, '${bossMaster}')">
        ${question.options[i]}
        </button> <br>`
        }
        html+= `</div>`
   
    return html;
}