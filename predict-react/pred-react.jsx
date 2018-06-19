function DisplayForm(props) {
    return (
        <label>
            {props.name}
            <input type="text" name={props.name} value={props.value} onChange={props.onChange} />
        </label>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priorHypothesis: '',
            probTrueWithEvent: '',
            probFalseWithEvent: ''
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
        () => this.handleClick(id)
        event.preventDefault();
    }
    /* calcBayes(x,y,z) {
        return testAnswer((x*y) / ((x*y) + (z - (z*x))));
    }
    testAnswer(input) {
        return input < 0 || input > 1 || typeof input != "number" 
        ? displayMsg("Inputs must be a decimal number between 0 and 1")
        : displayAnswer(`Percent probability your hypothesis is correct: ${(input * 100).toFixed(2)}%`)
    } */
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>
                        Prior Hypothesis:
                        <input type="text" value={this.state.priorHypothesis} onChange={this.handleChange} />
                    </label> */}
                    <DisplayForm name="priorHypothesis" value = {this.state.priorHypothesis} onChange={this.handleChange}/>
                    <DisplayForm name="probTrueWithEvent" value = {this.state.probTrueWithEvent} onChange={this.handleChange}/>
                    <DisplayForm name="probFalseWithEvent" value = {this.state.probFalseWithEvent} onChange={this.handleChange}/>

                    <input type="submit" value="Submit" />
                </form>
                <p>{this.state.priorHypothesis}</p>
                <p>{this.state.probTrueWithEvent}</p>
                <p>{this.state.probFalseWithEvent}</p>
            </div>
            
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);