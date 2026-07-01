const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");
const message = document.createElement("p");
message.classList.add("message");
document.body.appendChild(message);




let humanPoints = 0 ;
let computerPoints = 0 ;

function getHumanChoice(){
rock.addEventListener("click", () => result(0, getComputerChoice()));
paper.addEventListener("click", () => result(1, getComputerChoice()));
scissors.addEventListener("click", () => result(2, getComputerChoice()));
}
function getComputerChoice(){
	return Math.floor(Math.random()*3);
}
function result(human , computer){
	if(human == computer){
	message.textContent = "It's, a draw!";
	}else if((human+1)%3 == computer) {
		computerPoints++;
		computerScore.textContent = computerPoints;
		message.textContent = "Oops!, You Lose";
	}
	else {
		humanPoints++;
		humanScore.textContent = humanPoints;
		message.textContent =  "You Win!";
	}
}
getHumanChoice();

