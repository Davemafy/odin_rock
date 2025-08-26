let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.round(Math.random() * 2);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose between rock, paper or scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log(`Its a draw, you both playes ${computerChoice} and ${humanChoice}`);
    } else if (computerChoice === "paper") {
      console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
      computerScore++
    } else if (computerChoice === "scissors") {
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
      humanScore++
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    } else if (computerChoice === "paper") {
      console.log(`Its a draw, you both playes ${computerChoice} and ${humanChoice}`);
    } else if (computerChoice === "scissors") {
      computerScore++
      console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      humanScore++
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    } else if (computerChoice === "paper") {
      computerScore++
      console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === "scissors") {
      console.log(`Its a draw, you both playes ${computerChoice} and ${humanChoice}`);
    }
  }
}

function playGame(plays) {
  let i = 0;
  while (i < plays) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    i++
  }
}


playGame(5)