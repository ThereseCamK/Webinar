function ShowStartScreen(){   
    let html = /*HTML*/`
    <div class="welcomePage" >
    <h1 class="welcomeMsg">Velkommen til Therese og Maries Eventyrlige spill!</h1>
    <button class="startGameButton" onclick="startGame()">Start nytt spill</button>
    <br>
    <img class="pic" height= 420px; src='${model.userImg}' />   
    </div>    
    `
    document.getElementById('app').innerHTML = html; 
}

function startGame(){
    model.currentPage = 'startPage'
    updateView()
}