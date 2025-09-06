let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const score = document.querySelectorAll(".score-board span");
const display = document.querySelector(".display");

buttons[0].addEventListener("click", () => {
  buttons[0].classList.add("clicked");
  setTimeout(() => {
    buttons[0].classList.remove("clicked");
  }, 400);
  setTimeout(() => {
    playRound("rock", getComputerChoice());
  }, 300);
});

buttons[1].addEventListener("click", (e) => {
  buttons[1].classList.add("clicked");
  setTimeout(() => {
    buttons[1].classList.remove("clicked");
  }, 400);
  setTimeout(() => {
    playRound("paper", getComputerChoice());
  }, 300);
});

buttons[2].addEventListener("click", () => {
  buttons[2].classList.add("clicked");
  setTimeout(() => {
    buttons[2].classList.remove("clicked");
  }, 400);
  setTimeout(() => {
    playRound("scissors", getComputerChoice());
  }, 300);
});

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

function playRound(humanChoice, computerChoice) {
  let para = document.createElement("p");

  display.innerHTML = "";

  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      para.textContent += `Its a draw, you both played 👊!`;
    } else if (computerChoice === "paper") {
      para.textContent += `You lost,  🖐 beats 👊!`;
      computerScore++;
    } else if (computerChoice === "scissors") {
      para.textContent += `You win, 👊 beats ✌!`;
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      para.textContent += `You win,  🖐 beats 👊!`;
    } else if (computerChoice === "paper") {
      para.textContent += `Its a draw, you both played 🖐!`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      para.textContent += `You lost, ✌ beats ! 🖐`;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      para.textContent += `You lost, 👊 beats ✌!`;
    } else if (computerChoice === "paper") {
      humanScore++;
      para.textContent += `You win, ✌ beats  🖐!`;
    } else if (computerChoice === "scissors") {
      para.textContent += `Its a draw, you both played ✌!`;
    }
  }
  if (computerScore > humanScore) {
    score[1].classList.add("first");
  } else if (humanScore > computerScore) {
    score[1].classList.remove("first");
  }

  score[0].textContent = `User: ${humanScore}`;
  score[1].textContent = `Opponent: ${computerScore}`;

  if (humanScore == 5 || computerScore == 5) {
    display.innerHTML = "";
    para.textContent =
      humanScore == 5
        ? "Congratulations! You won this round 🎉"
        : "Oops, Robot won this round🏓!";
    para.classList.add("bold");
    humanScore = 0;
    computerScore = 0;
  }

  display.appendChild(para);
}
