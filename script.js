function getComputerChoice() {
  let rand = Math.random();
  let choice = "";

  if (rand < 0.33) choice = "rock";
  else if (rand < 0.66) choice = "paper";
  else choice = "scissors";

  return choice;
}
