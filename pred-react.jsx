//Component that displays takes and displays user inputs.
function DisplayInput(props) {
    return (
        <label>
            {props.text}
            {/* Calls onChange method within app component when user input value changes */}
            <input type="text" name={props.name} value={props.value} onChange={props.onChange} />
        </label>
    )
}
//Display dynamic Variable section of the Ui with a header and paragraphs
function DisplayVariables(props) {
    return (
        <div className = "variables-inner-div">
            <h3>Probabilities</h3>
            {/* App component variables are passed in as props and converted to percent numbers */}
            <p> Base rate (prior) probability: 
                <strong> {` ${props.prior * 100}%`} </strong></p>
            <p>Probability of evidence event if hypothesis is true:
                <strong> {` ${props.probTrue * 100}%`} </strong></p>
            <p>Probability of evidence event if hypothesis is false:
                <strong> {` ${props.probFalse * 100}%`} </strong></p>
        </div>
    )
}
//Primary App component that handles inputs, calculates using bayes formula and renders ui
class App extends React.Component {
    constructor(props) {
        super(props);
        // input probabilities and result answer is saved in the state:
        this.state = {
            priorHypothesis: 0,
            probTrueWithEvent: 0,
            probFalseWithEvent: 0,
            answer: "0%"
        };
    }
    //This method handles/tests inputs and updates the state when they change
        //Here the input is validated using the test input method:
    handleChange = (event) => this.testInput(event.target.value) === true
        //if the input isn't a number between 0 and 1 the answer state is updated with an error message
            //and the name input value is reset to 0:    
        ? this.setState( {answer: "Inputs must be a decimal number between 0 and 1", [event.target.name]: 0})
        //update the answer with the input name and value:
        : this.setState( {answer: "0%", [event.target.name]: event.target.value} );
    //This method runs the calculate method with the correct variables and prevents default reset:
    handleSubmit = (event) => {
        this.calcBayes(this.state.priorHypothesis, this.state.probTrueWithEvent, this.state.probFalseWithEvent);
        event.preventDefault();
    }
    //This method calculates the answer and tests if it is a number between 0 and 1:
    calcBayes = (x,y,z) => this.handleAnswer((x*y) / ((x*y) + (z - (z*x))));
    //This method tests an input to see if it is a number between 0 and 1:
    testInput = (input) => input < 0 || input > 1 || isNaN(input); 
    //This method tests the answer and calls the display message function to render the answer to the ui
    handleAnswer = (input) => (this.testInput(input)) 
    ? this.displayMsg("Inputs must be a decimal number between 0 and 1")
    : this.displayMsg(` ${(input * 100).toFixed(2)}%`);
    //This method updates the answer state with the message passed in:
    displayMsg = (msg) => this.setState({answer: msg});
    //Below all the components are rendered to the screen with jsx
    render() {
        return (
            <div className="container"> 
                <div className="form-div">
                    {/* Below is the form with submit handler and input components*/}
                    <form onSubmit={this.handleSubmit}>
                        <h3>Inputs</h3>
                        <DisplayInput name="priorHypothesis" value = {this.state.priorHypothesis} onChange={this.handleChange} text="Base Rate (prior)"/>
                        <DisplayInput name="probTrueWithEvent" value = {this.state.probTrueWithEvent} onChange={this.handleChange} text="Hit Rate"/>
                        <DisplayInput name="probFalseWithEvent" value = {this.state.probFalseWithEvent} onChange={this.handleChange} text="False Alarm Rate"/>
                        <input id="submit" type="submit" value="Submit" />
                    </form>
                </div>
                {/* Here the variable component is called and displays the variables to the ui */}
                <div className="variables-div">
                    <DisplayVariables prior = {this.state.priorHypothesis} probTrue = {this.state.probTrueWithEvent}probFalse = {this.state.probFalseWithEvent} />
                </div>
                {/* here the answer is rendered with a header*/}
                <div className = "answer-div">
                    <h3>Result</h3>
                    <p>Probability your hypothesis is correct: <strong> {this.state.answer} </strong> </p> 
                </div>
            </div>
                
        );
    }
}
//Render the app component and place it in the html at the location with an id of app:
ReactDOM.render(
    <App />,
    document.getElementById('app')
);