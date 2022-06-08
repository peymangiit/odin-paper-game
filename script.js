let playerScore = 0;
let computerScore = 0;

const playerSelection = 'rock';
function computerPlay() {
    let choice = ['paper', 'rock', 'scissor']
    return  choice [Math.floor(Math.random()*3)]}
   // console.log(computerChoice)

 //console.log (computerPlay())
function playRound(playerSelection, computerChoice) {
  
   
     if (playerSelection === 'rock' && computerChoice === 'rock') {
         return 'draw! nobody wins';
     } else if (playerSelection === 'rock' && computerChoice === 'scissor'){
          return 'You win! rock beats scissor';
     } else if (playerSelection === 'rock' && computerChoice === 'paper'){
         return 'You lose! paper beats rock';
     }

 }
function game() {
     for (let i = 0; i < 5; i++) {
       let result = playRound(playerSelection, computerPlay())
        console.log(result)
         if (result == 'You lose! paper beats rock'){ computerScore++}
         else if (result == 'You win! rock beats scissor'){ playerScore++}

     }
     if (playerScore > computerScore){ console.log("You won the game")}
     else console.log("you lost the game")
     console.log(computerScore)
     console.log(playerScore)
 }