//BossView
function showBoss(){
    model.itemView = '';

    let randomBoss = Math.floor(Math.random()* model.opponents.length )
    console.log(randomBoss, ' hva viser denne?')
    console.log(model.opponents[randomBoss].equipmentNeedToTask)
    model.itemView += `
    
    <div class="boss">
            <h1> Du møtte på en boss! </h1>

        <div  
            style="width:${model.opponents[randomBoss].level}px; 
            background-color: blue;">
             Health: ${model.opponents[randomBoss].health}<br>
             Level: ${model.opponents[randomBoss].level}
             </div>
   
            <p>navn: ${model.opponents[randomBoss].name}</p>
    `;
    checkIfYouHaveItemToFightBoss(randomBoss,);
    model.itemView += `</div>`
    updateMainView();
}

function checkIfYouHaveItemToFightBoss(randomBoss) {
    if (model.itemUsed.includes(model.opponents[randomBoss].equipmentNeedToTask)) {
        model.itemView += `
            <img style=" heigth: 300px; width: 300px;" src="${model.opponents[randomBoss].img}"/>
        
        `;
        model.itemView += checkBoss(randomBoss);
      
    }
    else {
        model.itemView += `<h3>Plukk opp det du trenger for å fighte denne bossen</h3>
        <button onclick="showItems()">Tilbake</button>
        `;

    }
}

function checkBoss(boss){

    let html = ''
    console.log(boss)
    if(model.opponents[boss].codeMaster == true){
      html +=  showQuestion(model.opponents[boss].level, 'codeQestions', boss)
    }
    else {
       html +=  showQuestion(model.opponents[boss].level, 'nkQuestions', boss)
    }
    return html;

}

function showQuestion(bossLevel, bossMaster, bossIndex){
 
   let html = '';
  
    if(bossMaster == 'codeQestions'){
        let question = model.codeQuestions[bossLevel]
        console.log(question.question)
                 html += `<h3>${question.question }</h3>`
            for(let i = 0; i < question.options.length; i++){
                html += `<button onclick="checkIfCodeQuestionIsCorrect(${i}, ${bossLevel}, ${bossIndex})">
                ${question.options[i]}
                </button> <br>`
            }
    }
    else {
        let nkQuestion = model.nkQuestions[bossLevel]
        html += `<h3>${nkQuestion.question }</h3>`
        for(let i = 0; i < nkQuestion.options.length; i++){
            html += `<button onclick="checkIfNkQuestionIsCorrect(${i}, ${bossLevel}, ${bossIndex})">
            ${nkQuestion.options[i]}
            </button> <br>`
        }
    }
   
    return html 


}