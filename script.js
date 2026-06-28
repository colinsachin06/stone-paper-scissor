function getHumanChoice(){
	let choose = prompt("Rock , Paper or Scissors?");
	choose = choose.toLowerCase();
	if(choose == "rock") return 0;
	if(choose == "paper") return 1;
	return 2;
}
function getComputerChoice(){
	return Math.floor(Math.random()*3);
}
function result(human , computer){
	if(human == computer) alert("It's, a draw!");
	else if((human+1)%3 == computer) alert("Oops!, You Loose");
	else alert("You Win!");
}
result(getHumanChoice(),getComputerChoice());
