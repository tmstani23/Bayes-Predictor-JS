function DisplayInput(props) {
    return (
        <label>
            {props.text}
            <input type="text" name={props.name} value={props.value} onChange={props.onChange} />
        </label>
    )
}
function DisplayVariables(props) {
    return (
        <div className = "variables-inner-div">
            <h3>Variables </h3>
            <p> Base rate (prior) probability: 
                {` ${props.prior * 100}%`}</p>
            <p>Probability of evidence event if hypothesis is true:
                {` ${props.probTrue * 100}%`}</p>
            <p>Probability of evidence event if hypothesis is false:
                {` ${props.probFalse * 100}%`}</p>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priorHypothesis: 0,
            probTrueWithEvent: 0,
            probFalseWithEvent: 0,
            answer: "0%"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        return this.testInput(event.target.value) === true
        ? this.setState({
            answer: "Inputs must be a decimal number between 0 and 1",
            [event.target.name]: 0
            })
        : this.setState( {
            answer: "0%",
            [event.target.name]: event.target.value} );
    }
  
    handleSubmit(event) {
        
        this.calcBayes(this.state.priorHypothesis, this.state.probTrueWithEvent, this.state.probFalseWithEvent);
        event.preventDefault();
    }
    calcBayes(x,y,z) {
        return this.testAnswer((x*y) / ((x*y) + (z - (z*x))));
    }
    testInput(input){
        return input < 0 || input > 1 || isNaN(input) 
        ? true
        : false;
    }
    testAnswer(input) {
        return input < 0 || input > 1 || isNaN(input) 
        ? this.displayMsg("Inputs must be a decimal number between 0 and 1")
        : this.displayMsg(` ${(input * 100).toFixed(2)}%`);
    }
    displayMsg(msg) {
        return this.setState({answer: msg});
    }
    render() {
        return (
            <div className="container"> 
                <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Inputs</h3>
                        <DisplayInput name="priorHypothesis" value = {this.state.priorHypothesis} onChange={this.handleChange} text="Base Rate (prior)"/>
                        <DisplayInput name="probTrueWithEvent" value = {this.state.probTrueWithEvent} onChange={this.handleChange} text="Hit Rate"/>
                        <DisplayInput name="probFalseWithEvent" value = {this.state.probFalseWithEvent} onChange={this.handleChange} text="False Alarm Rate"/>
                        <input id="submit" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="variables-div">
                    <DisplayVariables  prior = {this.state.priorHypothesis} probTrue = {this.state.probTrueWithEvent}probFalse = {this.state.probFalseWithEvent} />
                </div>
                
                <div className = "answer-div">
                    <h3>Result</h3>
                    <p>Probability your hypothesis is correct: {this.state.answer}</p>
                </div>
            </div>
                
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);