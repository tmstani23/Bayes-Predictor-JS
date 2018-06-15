
// Bayes formula: (x*y) / ((x*y) + (z*1 - z*x))
// x=displayprior / y=displaytrueprob / z = displayfalseprob

//User inputs from DOM:
//parseFloat(document.getElementById("base-rate").value);
let priorHypothesis = document.getElementById("base-rate");
let probTrueWithEvent = document.getElementById("true-input");
let probFalseWithEvent = document.getElementById("false-input");
let x;
let y;
let z;

let updateX = (input) => console.log(x = input.value);
let updateY = (input) => console.log(y = input.value);
let updateZ = (input) => console.log(z = input.value);

//Compute answer probability:
const calcAnswer = () => testAnswer((x*y) / ((x*y) + (z - (z*x))));

const testAnswer = (input) => { input < 0 || input > 1 || typeof input != "number" 
    ? displayMsg("Inputs must be a decimal number between 0 and 1")
    : displayAnswer(`Percent probability your hypothesis is correct: ${(input * 100).toFixed(2)}%`) 
};
const displayMsg = (msg) => $("#result-p").text(msg);
const displayAnswer = (input) => displayMsg(input);






