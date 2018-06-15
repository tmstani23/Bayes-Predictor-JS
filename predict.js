
// Bayes formula: (x*y) / ((x*y) + (z*1 - z*x))
// x=displayprior / y=displaytrueprob / z = displayfalseprob

//User inputs from DOM:

let priorHypothesis = parseFloat(document.getElementById("base-rate").value);
let probTrueWithEvent = parseFloat(document.getElementById("true-input").value);
let probFalseWithEvent = parseFloat(document.getElementById("false-input").value);

//console.log(priorHypothesis);
//const getInputs = (priorHypothesis, probTrueWithEvent, probFalseWithEvent) => 
// const priorHypothesis = parseFloat(prompt("Please enter your prior variable (percent chance your hypothesis is correct)."));
// const probTrueWithEvent = parseFloat(prompt("Please enter estimated probability your hypothesis is true given event."));
// const probTrueWithEvent = parseFloat(prompt("Please enter probability false given event:"))
//Compute answer probability:
//let calcAnswer = (x,y,z) => console.log((x*y) / ((x*y) + (z - (z*x))));
//let answer = () => calcAnswer(priorHypothesis, probTrueWithEvent, probFalseWithEvent);

function testUpdate(input) {
    return console.log(input);
}
//Display functions:
// const displayPrior = (priorHypothesis) => $("#resultbox").text("Base rate of situations where hypothesis is true (prior probability): " + priorHypothesis);
// const displayTrueProb = (probTrueWithEvent) => $("#resultbox").text("Probability of event if hypothesis is correct: " + probTrueWithEvent);
// const displayFalseProb = (probFalseWithEvent) => $("#resultbox").text("Probability of event if hypothesis is false: " + priorHypothesis);
// const displayAllProb = (x, y, z) => $("#resultbox").text(`Base rate probability: ${x} 
// 	Probability of event if hypothesis is true: ${y}
// 	Probability of event if hypothesis is false: ${z}`);
	
//Display answer function:
// const displayAnswer = answer => $("#resultbox").text(`Probability your hypothesis is correct: ${answer}`);

	



//console.log(answer(priorHypothesis, probTrueWithEvent, probFalseWithEvent));	




