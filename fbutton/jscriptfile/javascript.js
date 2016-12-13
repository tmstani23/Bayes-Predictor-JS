
// Global Variables

var userInput = []; //An array container to store the entered names for the second button
var x = []; //Array used to store the information for each variable in Beye's theorem
var y = [];
var z = [];
var answer = 0; //Answer variable for the Beye's theorem button.

//Messages is variable that stores quotation messages for the wisdom button.
var messages = [
	"Anything in any way beautiful derives its beauty from itself and asks nothing beyond itself." 
		+ "Praise is no part of it, for nothing is made worse or better by praise.  -Marcus Aurelius", 
	"The happiness of your life depends upon the quality of your thoughts.   -Marcus Aurelius", 
	"If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it;" 
		+ "and this you have the power to revoke at any moment.  -Marcus Aurelius", 
	"I have often wondered how it is that every man loves himself more than all the rest of men," 
		+ "but yet sets less value on his own opinion of himself than on the opinion of others.  -Marcus Aurelius", 
	"Do not act as if you were going to live ten thousand years. Death hangs over you." 
		+ "While you live, while it is in your power, be good.  -Marcus Aurelius",
	"Think of yourself as dead. You have lived your life. Now, take what's left and live it properly." 
		+ "What doesn't transmit light creates its own darkness.  -Marcus Aurelius",
	"It is the power of the mind to be unconquerable. -Seneca",
	"Never let the future disturb you. You will meet it, if you have to, "
		+ "with the same weapons of reason which today arm you against the present.  -Marcus Aurelius",
	"A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation," 
		+ "and desire into undertaking.  -Nassim Nicholas Taleb",
	"Nothing, to my way of thinking, is a better proof of a well ordered mind"
	 	+ " than a man's ability to stop just where he is and pass some time in his own company.  -Seneca",
	"For death remembered should be like a mirror, Who tells us life is but breath, to trust it error.  -William Shakespeare, Pericles",
	"What really frightens and dismays us is not external events themselves, but the way in which we think about them." 
	 	+ " It is not things that disturb us, but our interpretation of their significance.  -Epictetus",
	"Care about what other people think and you will always be their prisoner.  -Lao Tzu",
	"Respond intelligently even to unintelligent treatment.  -Lao Tzu",
	"The truth is not always beautiful, nor beautiful words the truth. -Lao Tzu",
	"It is the mark of an educated mind to be able to entertain a thought without accepting it. -Aristotle,",
	"I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self. -Aristotle"
];


//buttonClick is called when a user clicks the first button
function buttonClick() {
    document.getElementById("button1").innerHTML = "More Wisdom!";  //Changes the text in the html button1 to "More Wisdom!"
 		function getMessage() {
   			var messageResult = Math.floor(messages.length*Math.random()); //Takes messages length and chooses a random number within the length
			$("#resultbox").text((messages[messageResult])); //Uses jquery to print the result in a css element called resultbox
			$("#resultbox").css({color: "#500805"});
		}
		getMessage();
}
//buttonClickTwo is called when a user clicks the second button
function buttonClickTwo() {
    document.getElementById("button2").innerHTML = "Add Another Name!"; //Changes the html text on button two to "Add Another Name"
 	function getText() {
	var userText = prompt("Please enter your name"); //Creates a popup box that asks for the user's name
	userInput.push(userText); //Takes the name and stores it in the userInput array.
	}
	getText();
	$("#resultbox").text("Names entered: " + userInput.join(", ")); //shows all names entered in text seperated by commas.
	$("#resultbox").css({color: "#500805"});     
}


//Called when the user clicks the third button
function buttonClickThree() {
    getUserVar(); //initializes getUserVar a nested function
	function getUserVar() {
	var userX = prompt("Please enter your prior variable (percent chance your hypothesis is correct)."); //Takes user input as a prompt
	x.push(userX); //Stores the above input in the x array
	$("#resultbox").text("Your prior probability: " + x); //Displays the message and the user response as text in the resultbox
	var userY = prompt("Please enter estimated probability your hypothesis is true given event."); //Takes user input as a prompt
	y.push(userY); //Stores the above input in the y array
	$("#resultbox").text("Your prior probability: " + x + "Your entered probability given true: " + y); //Displays the message and the user response as text in the resultbox
	var userZ = prompt("Please enter probability false given event:");
	z.push(userZ);
	$("#resultbox").text("Your prior probability: " + x + "Your entered probability given true: " + y + 
		"Probability false given event: " + z);  //Displays all the entered variable inputs in the resultbox as text.
	answerProb(); //Runs answerProb a function to calculate Beye's formula from the user inputs entered
	
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
	}
}








