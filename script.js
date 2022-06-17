let playerScore = document.querySelector('#playerscore');

let computerScore = document.querySelector('#computerscore');

function computerPlay() {
    let choice = ['paper', 'rock', 'scissor']
    return  choice [Math.floor(Math.random()*3)]
    // console.log()
}
   


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


 function game(result) {
       
    if (result == 'You Lose! paper beats rock' || result == 'You Lose! scissor beats paper' || result == 'You Lose! rock beats scissor' ){
        if (playerScore.textContent > 0) 
         playerScore.textContent--

       }
    else if (result == 'You Win! rock beats scissor' || result == 'You Win! paper beats rock' || result == 'You Win! scissor beats paper'){
        if (computerScore.textContent > 0) 
      
        computerScore.textContent--
       }
}



function finalReveal(playerScore , computerScore){
    finalTextBox = document.querySelector('.finalText')
   console.log(playerScore)
    if ( computerScore == 0){ 
        alert("YOU WIN")
        finalTextBox.textContent= "<<YOU WON THE GAME!!!>>"

       } else if (playerScore == 0 ) {
        alert ("YOU LOST!")
        finalTextBox.textContent= "<<YOU LOST THE GAME !>>"
     }
    }
    
    


    
    document.addEventListener('click', (e) => {
        let userInput = e.target.id;
        console.log(userInput)
        let result = playRound(userInput, computerPlay())
        //console.log(result)
        const textBox = document.querySelector('.textBox');
        textBox.textContent = result;
        game(result)
        //console.log(playerScore.textContent)
        finalReveal(playerScore.textContent,computerScore.textContent)
     })



    

     
    // console.log(`computer Score is : ${computerScore}`)
    // console.log(`player Score is : ${playerScore}`)
    //condition for wining 
    //  if (playerScore > computerScore){ 
    //      console.log("<<YOU WON THE GAME!!!>>")
    //     } else if (playerScore < computerScore) {
    //          console.log("<<YOU LOST THE GAME !>>")
    //         } else {
    //             console.log("<<THE GAME END UP IN TIE !>>")
    //         }    
            
    //  //clear the scores
    //  playerScore = 0;
    //  computerScore = 0;



    //  const findId = document.addEventListener('click', (e) => {
    //    console.log(e.target);
    //  })
    
     