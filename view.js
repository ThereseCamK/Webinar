updateView()
function updateView(){
    if(model.currentPage == 'welcomePage'){
        ShowStartScreen();
    }
    else if(model.currentPage == 'startPage'){
        model.itemView = showItems();
        if(model.currentLevel == 4){
            model.itemView = `<div class="text">Gratulerer du har vunnet ultimate codeskills og nkskills!</div>` 
        }
        updateMainView();
    }
    else if(model.currentPage == 'fightPage')
    {
        model.itemView = showBoss();
        updateMainView()        
    }
    else if(model.currentPage == 'itemPage'){
        model.itemView = showItems();
        updateMainView();
    }
    else if(model.currentPage == 'gameOver'){
        drawGameOverScreen()
    }
}

function updateMainView(){
    let html =/*HTML*/`
        <div class="mainContent" style="background-image: url(${model.backgroundImgs[model.currentLevel -1]});">    
        ${drawBar('row1', model.levelCode, 'CodeSkillz')}
        ${drawBar('row2', model.levelNK, 'NkSkillz')}
        ${drawBar('row3', model.healthBar, 'Health')}
        ${model.itemView}
        <img src="${model.userImg}" style=" heigth: 400px; width: 400px; position: absolute; left: 70%;  top:56%;" />
        <img onclick="showInventory()" src="pictures/Christmas/julesekk.png" style="height: 100px;  position: absolute; left: 85%;  top:1%;">
        <div class="bagContent" style="color: white;  position: absolute; left: 85%;  top:10%;">${model.bagview}</div>
        </div>
    `   
    document.getElementById('app').innerHTML = html;
}

function drawBar(row, barType, barName){
    return /*HTML*/`
    <div class="${row} levelBarCodeSkillz">
            <div class="bar" style="width:${barType}%; background-color: ${getBackgroundColor(barType)};">
                ${barName}:
            </div>
        </div>`
}

function showItems(){
    let html = '';
    for(let i = 0; i < model.pickUpItems.length; i++){
        if(model.currentLevel == model.pickUpItems[i].level){
            if(model.inventoryMode == false){
                getRendomItemPos()  
            }   
            html += drawItemImage(i)                     
        }        
    }
    return html;
}

function drawItemImage(i){
    return `
    <img onclick="pickUp(${i})" 
    src="${model.pickUpItems[i].img}" style=" heigth: 200px; width: 200px; position: absolute; left: ${model.itemLeft}%;  top:${model.itemTop}%;"/>
    `
}

function randomLeft(){
    return Math.floor(Math.random()*60 +1);
}

function randomTop(){
    return Math.floor(Math.random()*70 +10);
}
function drawGameOverScreen(){
    document.getElementById('app').innerHTML = `
    <div class="welcomePage" >
    <div class="text">Du ble slått av den dyktige ${model.currentBoss.name} sine spørsmål</div>
    <img class="pic" height= 420px; src='pictures/gameover.png' />  
   <button class="startGameButton" onclick="window.location.reload()">Start nytt spill</button> </div>`
}
function itemPicture(){
    let randomItem = getRandomItem();
    getRendomItemPos()
    if(model.pickUpItems.length > 0){
        return ` <img onclick="pickUp('${randomItem}')" 
        src="${model.pickUpItems[randomItem].img}" style=" heigth: 200px; width: 200px; position: absolute; left: ${model.itemLeft}%;  top:${model.itemTop}%;"/>`
    }
    else return '';
}

function getRendomItemPos(){
    model.itemLeft = Math.floor(Math.random()* 60 ) +1;
    model.itemTop = 10 + Math.floor(Math.random()* 50 );  
}

function getBackgroundColor(statusBar){
    let bckColor = '';
    if(statusBar < 40){
        bckColor = 'red'
    }
    else if(statusBar <= 70 && statusBar >= 40){
      
        bckColor = 'yellow'
    }
    else {
        bckColor = 'green'
    }
    return bckColor;
}

function showInventory(){
    let html = '';
    if(model.bagview == ''){
        model.inventoryMode = true;
        html += '<ul>'
        for(let i = 0; i < model.inventory.length; i++){
            html += `<li onclick="useInventoryItem(${i})">${model.inventory[i].name} <br><img style=" heigth: 50px; width: 50px;" src="${model.inventory[i].img}"/>
            </li>`;
        }
        html += '</ul>'
    }
    else{
        model.inventoryMode = false;
        html = '';
    }
    model.bagview = html;
    updateMainView();
}

