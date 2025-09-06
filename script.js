let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const score = document.querySelectorAll(".score-board span");
const display = document.querySelector(".display");

const emoji = {
  rock: "👊",
  paper: "🖐",
  scissors: "✌",
};

buttons[0].addEventListener("click", () => {
  buttons[0].classList.add("clicked");
  setTimeout(() => {
    buttons[0].classList.remove("clicked");
  }, 400);
  playRound("rock", getComputerChoice());
});

buttons[1].addEventListener("click", (e) => {
  buttons[1].classList.add("clicked");
  setTimeout(() => {
    buttons[1].classList.remove("clicked");
  }, 400);
  playRound("paper", getComputerChoice());
});

buttons[2].addEventListener("click", () => {
  buttons[2].classList.add("clicked");
  setTimeout(() => {
    buttons[2].classList.remove("clicked");
  }, 400);
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  let choice = Math.round((Math.random() * 20) / 10);

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
      display.style.background = "pink";
    } else if (computerChoice === "scissors") {
      para.textContent += `You win, 👊 beats ✌!`;
      humanScore++;
      display.style.background = "lightgreen";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      para.textContent += `You win,  🖐 beats 👊!`;
      display.style.background = "lightgreen";
    } else if (computerChoice === "paper") {
      para.textContent += `Its a draw, you both played 🖐!`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      para.textContent += `You lost, ✌ beats ! 🖐`;
      display.style.background = "pink";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      para.textContent += `You lost, 👊 beats ✌!`;
      display.style.background = "pink";
    } else if (computerChoice === "paper") {
      humanScore++;
      para.textContent += `You win, ✌ beats  🖐!`;
      display.style.background = "lightgreen";
    } else if (computerChoice === "scissors") {
      para.textContent += `Its a draw, you both played ✌!`;
      display.style.background = "pink";
    }
  }
  if (computerScore > humanScore) {
    score[1].classList.add("first");
  } else if (humanScore > computerScore) {
    score[1].classList.remove("first");
  }
  score[0].textContent = `User: ${humanScore}`;
  score[1].textContent = `Opponent ${emoji[computerChoice]}: ${computerScore}`;

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
