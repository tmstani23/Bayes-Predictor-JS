function DisplayInput(props) {
    return (
        <label>
            {props.name}
            <input type="text" name={props.name} value={props.value} onChange={props.onChange} />
        </label>
    )
}
function DisplayVariables(props) {
    return (
        <div>
            <p>{props.prior}</p>
            <p>{props.probTrue}</p>
            <p>{props.probFalse}</p>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priorHypothesis: '',
            probTrueWithEvent: '',
            probFalseWithEvent: '',
            answer: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        //this.setState({priorHypothesis: event.target.value});
        this.setState( {[event.target.name]: event.target.value} );
    }
  
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        //console.log(event);
        this.calcBayes(this.state.priorHypothesis, this.state.probTrueWithEvent, this.state.probFalseWithEvent);
        event.preventDefault();
    }
    calcBayes(x,y,z) {
        //return console.log(x,y,z);
        
        //return console.log((x*y) / ( (x*y) + (z - (z*x)) ))
        return this.testAnswer((x*y) / ((x*y) + (z - (z*x))));
    }
    testAnswer(input) {
        return input < 0 || input > 1 || isNaN(input) 
        ? this.displayMsg("Inputs must be a decimal number between 0 and 1")
        : this.displayMsg(`Probability your hypothesis is correct: ${(input * 100).toFixed(2)}%`);
    }
    displayMsg(msg) {
        return this.setState({answer: msg});
    }
    render() {
        return (
            <div className="container"> 
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {/* <label>
                            Prior Hypothesis:
                            <input type="text" value={this.state.priorHypothesis} onChange={this.handleChange} />
                        </label> */}
                        <DisplayInput name="priorHypothesis" value = {this.state.priorHypothesis} onChange={this.handleChange}/>
                        <DisplayInput name="probTrueWithEvent" value = {this.state.probTrueWithEvent} onChange={this.handleChange}/>
                        <DisplayInput name="probFalseWithEvent" value = {this.state.probFalseWithEvent} onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <DisplayVariables prior = {this.state.priorHypothesis} probTrue = {this.state.probTrueWithEvent}probFalse = {this.state.probFalseWithEvent}
                />
                {/* <div>
                    
                    <p>{this.state.priorHypothesis}</p>
                    <p>{this.state.probTrueWithEvent}</p>
                    <p>{this.state.probFalseWithEvent}</p>
                </div> */}
                <div>
                    <h1>{this.state.answer}</h1>
                </div>
            </div>
                
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);