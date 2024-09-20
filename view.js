updateMainView();
function updateMainView(){
    let html =''

    // bakgrunnsbilde, den skal oppdateres i henhold til level
    // levelbar code
    // levelbar Nk
    // karakter
    // penger
    // ting man kan trykke på ( inventoy items)
    // ryggsekk (inventory)
    // nice to have store Ds
    // motstander

    html = /*HTML*/`
        <div class="mainContent" style="background-image: url(${model.backgroundImgs[model.currentLevel -1]}); background-size: cover;">
        <div class="levelBarCodeSkillz codeSkillz"><div class="codeSkillz" style="width:${model.levelCode}px; background-color: ${getBackgroundColor(model.levelCode)};"></div>
        <div class="levelBarCodeSkillz nkSkillz"><div class="nkSkillz" style="width:${model.levelNK}px; background-color: ${getBackgroundColor(model.levelNK)};"></div>
        <div class="levelBarCodeSkillz health"><div class="health" style="width:${model.healthBar}px; background-color: ${getBackgroundColor(model.healthBar)};"></div>
        </div>
        </div>
    `
    document.getElementById('app').innerHTML = html;

}

function getBackgroundColor(statusBar){
  
    let bckColor = '';
    if(statusBar < 40){
    
        bckColor = 'red'
    }
    else if(statusBar < 70 && statusBar > 40){
        console.log('else if funker ')
        bckColor = 'yellow'
    }
    else {
        bckColor = 'green'
    }
    return bckColor;
}

function showInventory(){

}

function showStore(){

}

function fightView(){
    let opponent = getBoss();
    let html = `
    <img src="${opponent.img}">
    <div>${opponent.health}</div>
    <img src="pictures/twoHeads.jpg">
    <div>${model.healthBar}</div>
    <div>${model.levelCode}</div>
    <div>${model.levelNK}</div>
    <button onclick="fightOpponent(${opponent})"></button>
    ` 
    return html;
}