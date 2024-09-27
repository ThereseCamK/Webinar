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
        
        <div class="row1 levelBarCodeSkillz">
            <div class="bar" style="width:${model.levelCode}px; background-color: ${getBackgroundColor(model.levelCode)};"></div>
        </div>
        <div class="row2 levelBarCodeSkillz">
            <div class="bar" style="width:${model.levelNK}px; background-color: ${getBackgroundColor(model.levelNK)};"></div>
        </div>
        <div class="row3 levelBarCodeSkillz">
            <div class="bar" style="width:${model.healthBar}px; background-color: ${getBackgroundColor(model.healthBar)};"></div>
        </div>
       ${itemPicture()}
        <img src="/pictures/twoHeadsNoBG.png" style=" heigth: 400px; width: 400px; position: absolute; left: 70%;  top:58%;" />
        </div>
        
    `
    // <img src="/pictures/twoHeadsNoBG.png" style=" heigth: 400px; width: 400px; position: absolute; left: ${model.itemLeft}%;  top: ${model.itemTop}%;" />
    document.getElementById('app').innerHTML = html;

}

function itemPicture(){

    let randomItem = getRandomItem();
    console.log(randomItem)
    if(model.pickUpItems.length > 0){
        return ` <img onclick="pickUp('${randomItem}')" 
        src="${model.pickUpItems[randomItem].img}" style=" heigth: 200px; width: 200px; position: absolute; left: 30%;  top:38%;"/>`
    }
    else return '';
}
getRendomItemPos();
function getRendomItemPos(){
    model.itemLeft = Math.floor(Math.random()* 60 ) +1;
    model.itemTop = 10 +Math.floor(Math.random()* 50 ) ;
    updateMainView();
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