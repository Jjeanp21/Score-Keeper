//player 1 object
const p1 ={
    score: 0,
    btn: document.getElementById("btn1"),
    display: document.getElementById("p1Display")
}

//player 2 object
const p2 ={
    score: 0,
    btn: document.getElementById("btn2"),
    display: document.getElementById("p2Display")
}

//get reset button by id
const rstBtn = document.getElementById("reset");

//get select element by id
const selectBtn = document.getElementById("playTo");

//winning score with initial value of 5
let winningScore = 5;

//boolean to determine if score is reached
let isGameOver = false;

//generic function to update player score
function updateScore(player, opponent){
    //while score isn't met
    if (!isGameOver) {
        player.score++; //increase score by one

        //if the winning score
        if (player.score === winningScore) {
            isGameOver = true;//flip to true

            //change colors for winner and loser
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
        player.display.textContent = player.score; //update the display of the score
    }
}

//event listener for when player 1 button is clicked
p1.btn.addEventListener('click', function(){
    //run function to update player object score
    updateScore(p1, p2)
})

//event listener for when player 2 button is clicked
p2.btn.addEventListener('click', function(){
    //run function to update player object score
    updateScore(p2, p1)
})

//event listener for when select value is changed
selectBtn.addEventListener('change', function () {
    //modify value from string to number
    winningScore = parseInt(this.value);

    //run reset function
    defaultSettings();
})

//Reset the score when reset button clicked; pass in reference to reset function
rstBtn.addEventListener('click', defaultSettings)

//function to reset settings
function defaultSettings() {
    isGameOver = false; //reset back to false

    //for...of statement to reset object properties
    for(let p of [p1,p2]){
        p.score = 0; //reset scores back to zero
        p.display.textContent = p.score; //update the reset scores on the screen
        p.display.classList.remove('has-text-success', 'has-text-danger'); //reset colors
        p.btn.disabled = false; //Reset the buttons from being disabled
    }
}