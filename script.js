let humanScore = 0,
  computerScore = 0;

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
  let humanWins = 1;
  if (humanChoice === "rock" && computerChoice === "paper") humanWins = 0;
  else if (humanChoice === "paper" && computerChoice === "scissors")
    humanWins = 0;
  else if (humanChoice === "scissors" && computerChoice === "rock")
    humanWins = 0;
  else if (humanChoice === computerChoice) humanWins = -1;

  handleResult(humanWins, humanChoice, computerChoice);
}

function handleResult(result, humanChoice, computerChoice) {
  let message = ""
  switch (result) {
    case -1:
      message = "It's a tie, better luck the next one"
      break;
    case 0:
      message = `Yieks! Looks like someone loose...\nSorry, ${computerChoice} beats ${humanChoice}`
      computerScore++
      break
    case 1:
      message = `Congrats! You have succefully beat a machine, what an achievent, uh?\n${humanChoice} beats ${computerChoice}`
      humanScore++;
      break;
    }
  console.log(message);
}