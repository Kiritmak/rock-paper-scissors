let humanScore = 0,
  computerScore = 0,
  rounds = 0;

const display = document.querySelector("#display");

function getComputerChoice() {
  let rand = Math.random();
  let choice = "";

  if (rand < 0.33) choice = "rock";
  else if (rand < 0.66) choice = "paper";
  else choice = "scissors";

  return choice;
}

function getHumanChoice() {
  let choice = "";
  choice = prompt("Input your choice");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  rounds++;
  let humanWins = 1;
  if (humanChoice === "rock" && computerChoice === "paper") humanWins = 0;
  else if (humanChoice === "paper" && computerChoice === "scissors")
    humanWins = 0;
  else if (humanChoice === "scissors" && computerChoice === "rock")
    humanWins = 0;
  else if (humanChoice === computerChoice) humanWins = -1;

  handleResult(humanWins, humanChoice, computerChoice);
  if(rounds === 5) {
    let message = "It's a tie!";
    if(computerScore > humanScore) message = "The computer has won!"
    else if(humanScore > computerScore) message = "The human won!"
    display.childNodes.forEach(elem => elem.textContent = "");
    alert(message);
    rounds=0;
  }
}

function handleResult(result, humanChoice, computerChoice) {
  let message = "";
  switch (result) {
    case -1:
      message = "It's a tie, better luck the next one";
      break;
    case 0:
      message = `Yieks! Looks like someone loose...\nSorry, ${computerChoice} beats ${humanChoice}`;
      computerScore++;
      break;
    case 1:
      message = `Congrats! You have succefully beat a machine, what an achievent, uh?\n${humanChoice} beats ${computerChoice}`;
      humanScore++;
      break;
  }
  const text = display.firstChild;
  text.textContent = message;
  text.nextSibling.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
}

const selectionBtns = document.querySelector("#player-choice-buttons");
selectionBtns.addEventListener("click", (event) => {
  if (event.target.classList.contains("choice-button")) {
    const selection = event.target.dataset.choice;
    console.log(selection);
    playRound(selection, getComputerChoice());
  }
});
