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
        <div>
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
            answer: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        //this.setState({priorHypothesis: event.target.value});
        //if test answer is false set state else display message
        console.log(event.target.value);
        if(this.testInput(event.target.value) === true) {
            //this.setState("true");
            //UPDATE THIS SECTION OR REMOVE:
            this.setState({[event.target.name]: "Inputs must be a decimal number between 0 and 1"})
            //this.displayMsg("Inputs must be a decimal number between 0 and 1")
        }
        else {
            this.setState( {[event.target.name]: event.target.value} )
        }
        //this.testAnswer({[event.target.name]: event.target.value});
        //this.setState( {[event.target.name]: event.target.value} );
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
        : this.displayMsg(` ${(input * 100).toFixed(2)} %`);
    }
    displayMsg(msg, location) {
        return this.setState({answer: msg});
    }
    render() {
        return (
            <div className="container"> 
                <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        
                        <DisplayInput name="priorHypothesis" value = {this.state.priorHypothesis} onChange={this.handleChange} text="Base Rate (prior) Probability:"/>
                        <DisplayInput name="probTrueWithEvent" value = {this.state.probTrueWithEvent} onChange={this.handleChange} text="False Positive Probability:"/>
                        <DisplayInput name="probFalseWithEvent" value = {this.state.probFalseWithEvent} onChange={this.handleChange} text="False Negative Probability:"/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <DisplayVariables prior = {this.state.priorHypothesis} probTrue = {this.state.probTrueWithEvent}probFalse = {this.state.probFalseWithEvent}
                />
                <div>
                    <h1>Probability your hypothesis is correct: {`${this.state.answer}%`}</h1>
                </div>
            </div>
                
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);