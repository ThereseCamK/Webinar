let audio = new Audio('secretsanta/spirit.mp3')

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

function audioStuff(){    
    audio.play();
    audio.volume = 0.1;
    let snowfall = new Snowfall({
        count: 30, // number of snowflakes
        minRadius: 10, // minimum radius of a snowflake in pixels
        maxRadius: 30, // maximum radius of a snowflake in pixels
        minSpeed: 3, // minimum speed of a snowflake in pixels per frame
        maxSpeed: 6, // maximum speed of a snowflake in pixels per frame
        text: "\u2744", // text for a snowflake (can be any symbol or text)
        color: "#ffffff", // color of a snowflake in HEX format
        zIndex: "1000" // z-index for the snowflakes canvas
    });
}

function startGame(){
    model.currentPage = 'startPage'
    updateView()
    audioStuff()
}