  //Retrieve score from localStorage if it exists 
    // if not initialize a default score obj
    let score = JSON.parse(localStorage.getItem('score')) || 
     {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScore();
    // reset score object function
    function reset(){
     
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
      //Remove saved score from localStorage for reset
      localStorage.removeItem('score');
      updateScore();

    }
   
    // Generate a random number between 0 and 1 and decide RPS
    function pickCompMove() {
      let compMove = '';
      const randomNum = Math.random();
      
      if (randomNum >=0 && randomNum < (1 / 3)){
       compMove = 'rock';

      } else if(randomNum >= 1 / 3 && randomNum < (2 / 3)) {
     compMove = 'paper'; 
      } else if(randomNum >= 2/3 && randomNum < 1){
     compMove = 'scissors'; 
      }
      return compMove;
    }
    // get Computer s move and display the result in the page
    function play(move){
      const computerMove = pickCompMove();
      let result = '';
      if(move === 'scissors'){
        if(computerMove === 'rock'){
          result = 'You lose';

        } else if(computerMove === 'paper'){
          result = 'You win';
        } else if(computerMove === 'scissors'){
          result = 'Tie';
        }
      }

      if(move === 'paper'){
        if(computerMove === 'rock'){
          result = 'You win';

        } else if(computerMove === 'paper'){
          result = 'Tie';
        } else if(computerMove === 'scissors'){
          result = 'You lose';
        }
      }
     if(move === 'rock'){
        if(computerMove === 'rock'){
          result = 'Tie';

        } else if(computerMove === 'paper'){
          result = 'You lose';
        } else if(computerMove === 'scissors'){
          result = 'You win';
        }
      } 
      if(result === 'You win'){
        score.wins += 1;
      } else if (result === 'You lose'){
        score.losses +=1;
      } else if(result === 'Tie'){
        score.ties +=1;
      }
      //Save updated score
      localStorage.setItem('score', JSON.stringify(score));
      
      
      updateScore();
      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You 
    <img src="images/${move}-emoji.png" class="result-move">
    <img src="images/${computerMove}-emoji.png" class="result-move">  Computer`;
    

    
    

    }// display the current score on the page
    function updateScore(){
      document.querySelector('.js-score').innerHTML = 
      `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }