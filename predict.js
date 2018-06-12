
// Global Variables

var x = []; //Array used to store the information for each variable in Beye's theorem
var y = [];
var z = [];
var answer = 0; //Answer variable for the Beye's theorem button.



function promptUser() {
	const userPrompt = prompt("Please enter your prior variable (percent chance your hypothesis is correct)."); //Takes user input as a prompt
	return userPrompt;
	
}
console.log(promptUser);
promptUser();
function displayPrior(promptUser) {
	const prior = $("#resultbox").text("Your prior probability: " + promptUser)
	return prior;
}
// x.push(userX); //Stores the above input in the x array
	
// 	; //Displays the message and the user response as text in the resultbox
	
// 	var userY = prompt("Please enter estimated probability your hypothesis is true given event."); //Takes user input as a prompt
	
// 	y.push(userY); //Stores the above input in the y array
	
// 	$("#resultbox").text("Your prior probability: " + x + "Your entered probability given true: " + y); //Displays the message and the user response as text in the resultbox
	
// 	var userZ = prompt("Please enter probability false given event:");
	
// 	z.push(userZ);
	
// 	$("#resultbox").text("Your prior probability: " + x + "Your entered probability given true: " + y + 
// 		"Probability false given event: " + z);  //Displays all the entered variable inputs in the resultbox as text.
	
// 		answerProb(); //Runs answerProb a function to calculate Beye's formula from the user inputs entered

function answerProb() {
	//Calculates the formula using multiple variables and updating the global variable answer as it progresses.
	answer = (x*y);
	var bottomAnswer = x*y;
	var bottomAnswer2 = z*1 - z*x;
	var bottomAnswer3 = bottomAnswer + bottomAnswer2;
	answer = answer / bottomAnswer3;
	document.getElementById("button3").innerHTML = "Click for new hypothesis";  //Changes the third button text to "Click for new hypothesis"
	//Code below displays all the previous inputs for each variable and the answer in the result box
	$("#resultbox").text("Your prior probability:  	" + x + "	Your entered probability given true: 	" + y + 
	"	Probability false given event: 	" + z + "	Probability your hypothesis is correct: 	" + answer);
	$("#resultbox").css({color: "#500805"});  
	//Resets the three variable arrays to empty
	x = [];
	y = [];
	z = [];
	
}




