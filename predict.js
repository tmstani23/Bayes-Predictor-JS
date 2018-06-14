

//User inputs
const priorHypothesis = prompt("Please enter your prior variable (percent chance your hypothesis is correct).");
const probTrueWithEvent = prompt("Please enter estimated probability your hypothesis is true given event."); //Takes user input as a prompt
const probFalseWithEvent = prompt("Please enter probability false given event:");


console.log(priorHypothesis);
console.log(probTrueWithEvent);
console.log(probFalseWithEvent);

//Display functions:
const displayPrior = (priorHypothesis) => $("#resultbox").text("Your prior probability: " + priorHypothesis);
const displayTrueProb = (probTrueWithEvent) => $("#resultbox").text("Probability your prior is true given event: " + probTrueWithEvent);
const displayFalseProb = (probFalseWithEvent) => $("#resultbox").text("Probability your prior is False given event: " + priorHypothesis);
const displayAllProb = (x, y, z) => $("#resultbox").text(`Your prior probability: ${x} 
	Your entered probability given true: ${y}
	Probability false given event: ${z}`);  //Displays all the entered variable inputs in the resultbox as text.

// formula: (x*y) / ((x*y) + (z*1 - z*x))
// x=displayprior / y=displaytrueprob / z = displayfalseprob
	
const answer = (x,y,z) => (x*y) / ((x*y) + (z*1 - z*x));
console.log(answer(displayPrior, displayTrueProb, displayFalseProb));	


// 		answerProb(); //Runs answerProb a function to calculate Beye's formula from the user inputs entered

// function answerProb(x,y,z) {
// 	//Calculates the formula using multiple variables and updating the global variable answer as it progresses.
// 	answer = (x*y);
// 	var bottomAnswer = x*y;
// 	var bottomAnswer2 = z*1 - z*x;
// 	var bottomAnswer3 = bottomAnswer + bottomAnswer2;
// 	
// 	document.getElementById("button3").innerHTML = "Click for new hypothesis";  //Changes the third button text to "Click for new hypothesis"
// 	//Code below displays all the previous inputs for each variable and the answer in the result box
// 	$("#resultbox").text("Your prior probability:  	" + x + "	Your entered probability given true: 	" + y + 
// 	"	Probability false given event: 	" + z + "	Probability your hypothesis is correct: 	" + answer);
// 	$("#resultbox").css({color: "#500805"});  
// 	//Resets the three variable arrays to empty
// 	x = [];
// 	y = [];
// 	z = [];
	
// }




