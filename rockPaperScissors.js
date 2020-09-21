const p1w = "Player 1 won!";
const p2w = "Player 2 won!";

const rps = (p1, p2) => {
if (p1 == p2)
return "Draw!";
else if (p1 == "rock" && p2 == "paper")
return p2w;
else if (p1 == "rock" && p2 == "scissors")
return p1w;
else if (p1 == "scissors" && p2 == "paper")
return p1w;
else if (p1 == "scissors" && p2 == "rock")
return p2w;
else if (p1 == "paper" && p2 == "scissors")
return p2w;
else if (p1 == "paper" && p2 == "rock")
return p1w;
};