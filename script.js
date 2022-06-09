let playerScore = 0;
let computerScore = 0;

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
    //loop the game for 5 times 
     for (let i = 0; i < 5; i++) {
         //catch error and respond for user to write correctly
       let playerSelection = prompt('please write down "paper"or "rock"or "scissor"', '') ; 
       if ( playerSelection === '' || playerSelection === null) {
           alert("please write down one of choices to continue playing");
            
       } 
      //for ending game in middle of play and stoping prompt
       else if (playerSelection === 'end'){return "you end the game. for start use 'game()' function ";}
       //making user input case insensetive ,couldn't put on prompt didn't catch null error 
       let userInput = playerSelection.toLowerCase();
       //calling playRound function and puting the value returnd in variable named result
       let result = playRound(userInput, computerPlay())
       //show the result on console
        console.log(result)
       // condition to add score for each of player and computer
         if (result == 'You lose! paper beats rock'){ computerScore++}
         else if (result == 'You win! rock beats scissor'){ playerScore++}
    }//END of loop
    // reveal final score
    console.log(`computer Score is : ${computerScore}`)
    console.log(`player Score is : ${playerScore}`)
    //condition for wining 
     if (playerScore > computerScore){ 
         console.log("YOU WON THE GAME!!!")
        } else if (playerScore < computerScore) {
             console.log("YOU LOST THE GAME !")
            } else {
                console.log("THE GAME END UP IN TIE !")
            }    
            
     //clear the scores
     playerScore = 0;
     computerScore = 0;
 }