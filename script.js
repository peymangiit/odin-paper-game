let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choice = ['paper', 'rock', 'scissor']
    return  choice [Math.floor(Math.random()*3)]}
   

 //function to compare every choice 
function playRound(playerSelection,computerSelection) {
  
   //it is possible to put wining condition together but that way can't return what beats like odin wants
     if (playerSelection === computerSelection ) {
        return " Draw! you both choose the same!"
     //condition for rock   
     } else if (playerSelection === 'rock' &&computerSelection === 'scissor'){
          return 'You Win! rock beats scissor';
     } else if (playerSelection === 'rock' &&computerSelection === 'paper'){
         return 'You Lose! paper beats rock';
     }
     // condition for paper
     if (playerSelection === 'paper' &&computerSelection === 'rock'){
         return 'You Win! paper beats rock';
    } else if (playerSelection === 'paper' &&computerSelection === 'scissor'){
        return 'You Lose! scissor beats paper';
    }
    //condition for scissor
    if (playerSelection === 'scissor' &&computerSelection === 'paper'){
        return 'You Win! scissor beats paper';
   } else if (playerSelection === 'scissor' &&computerSelection === 'rock'){
       return 'You Lose! rock beats scissor';
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
      //for ending game in middle of play and stoping prompt and clear the scores
       else if (playerSelection === 'end'){
            playerScore = 0;
            computerScore = 0;
           return "you end the game. for start use 'game()' function ";
        }
       //making user input case insensetive ,couldn't put on prompt didn't catch null error 
       let userInput = playerSelection.toLowerCase();
       //calling playRound function and puting the value returnd in variable named result
       let result = playRound(userInput, computerPlay())
       //show the result on console
        console.log(result)
       // condition to add score for each of player and computer
         if (result == 'You Lose! paper beats rock' || result == 'You Lose! scissor beats paper' || result == 'You Lose! rock beats scissor' ){
              computerScore++
            }
         else if (result == 'You Win! rock beats scissor' || result == 'You Win! paper beats rock' || result == 'You Win! scissor beats paper'){
              playerScore++
            }
    }//END of loop
    // reveal final score
    console.log(`computer Score is : ${computerScore}`)
    console.log(`player Score is : ${playerScore}`)
    //condition for wining 
     if (playerScore > computerScore){ 
         console.log("<<YOU WON THE GAME!!!>>")
        } else if (playerScore < computerScore) {
             console.log("<<YOU LOST THE GAME !>>")
            } else {
                console.log("<<THE GAME END UP IN TIE !>>")
            }    
            
     //clear the scores
     playerScore = 0;
     computerScore = 0;
 }