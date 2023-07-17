const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (!choices.includes(playerSelection)) {
    return 'Invalid choice. Please choose rock, paper, or scissors.';
  }

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (winConditions[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }

  return `You lose! ${computerSelection} beats ${playerSelection}.`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game.');
  } else if (playerScore < computerScore) {
    console.log('Oops! You lost the game.');
  } else {
    console.log("It's a tie game.");
  }
}

game();