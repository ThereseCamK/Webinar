updateView()

function updateView(){
    if(model.currentPage == 'welcomePage'){
        ShowStartScreen();
    }
    if(model.currentPage == 'startPage'){
        model.itemView = showItems();
        if(model.currentLevel == 4){
            model.itemView = `<div class="text">Gratulerer du har vunnet ultimate codeskills og nkskills!</div>` 
        }
        updateMainView();
    }
    if(model.currentPage == 'fightPage')
    {
        model.itemView = showBoss();
        updateMainView()        
    }
    if(model.currentPage == 'itemPage'){
        model.itemView = showItems();
        updateMainView();
    }
    if(model.currentPage == 'gameOver'){
        document.getElementById('app').innerHTML = `
        <div class="welcomePage" >
        <div class="text">Du ble slått av den dyktige ${model.currentBoss.name} sine spørsmål</div>
        <img class="pic" height= 420px; src='pictures/gameover.png' />  
       <button class="startGameButton" onclick="window.location.reload()">Start nytt spill</button> </div>`
    }
    
}

function ShowStartScreen(){   
    let html = /*HTML*/`
    <div class="welcomePage" >
    <h1 class="welcomeMsg">Velkommen til Therese og Maries Eventyrlige spill!</h1>
    <button class="startGameButton" onclick="startGame()">Start nytt spill</button>
    <br>
    <img class="pic" height= 420px; src='pictures/twoHeadsNoBG.png' />   
    </div>    
    `
    document.getElementById('app').innerHTML = html; 
}

function startGame(){
    model.currentPage = 'startPage'
    updateView()
}

function updateMainView(){
    let html =/*HTML*/`
        <div class="mainContent" style="background-image: url(${model.backgroundImgs[model.currentLevel -1]}); background-size: cover;">
      
        <div class="row1 levelBarCodeSkillz">
            <div class="bar" style="width:${model.levelCode}%; background-color: ${getBackgroundColor(model.levelCode)};">
                CodeSkillz:
            </div>
        </div>
      
        <div class="row2 levelBarCodeSkillz">
       
            <div class="bar" style="width:${model.levelNK}%; background-color: ${getBackgroundColor(model.levelNK)};">
                NkSkillz:
            </div>
        </div>
        <div class="row3 levelBarCodeSkillz">
      
            <div class="bar" style="width:${model.healthBar}%; background-color: ${getBackgroundColor(model.healthBar)};">
                Health:
            </div>
        </div>
       ${model.itemView}
        <img src="/pictures/twoHeadsNoBG.png" style=" heigth: 400px; width: 400px; position: absolute; left: 70%;  top:56%;" />
        <img onclick="showInventory()" src="pictures/bagr.png" style="height: 100px;  position: absolute; left: 85%;  top:1%;">
        <div class="bagContent" style="color: white;  position: absolute; left: 85%;  top:10%;">${model.bagview}</div>
        </div>

    `   
    document.getElementById('app').innerHTML = html;
}

function showItems(){
    let html = '';
    for(let i = 0; i < model.pickUpItems.length; i++){
        if(model.currentLevel == model.pickUpItems[i].level){
            if(model.inventoryMode == false){
                getRendomItemPos()
                html += `
                <img onclick="pickUp(${i})" 
                   src="${model.pickUpItems[i].img}" style=" heigth: 200px; width: 200px; position: absolute; left: ${model.itemLeft}%;  top:${model.itemTop}%;"/>
                `
            }
            else {
                html += `
                <img onclick="pickUp(${i})" 
                   src="${model.pickUpItems[i].img}" style=" heigth: 200px; width: 200px; position: absolute; left: ${model.itemLeft}%;  top:${model.itemTop}%;"/>
                `
            }                    
        }      
    }
    return html;
}

function randomLeft(){
    return Math.floor(Math.random()*60 +1);
}

function randomTop(){
    return Math.floor(Math.random()*70 +10);
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

