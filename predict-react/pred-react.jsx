

//Primary component used for rendering the app:
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

    }
    
    updateInputValue(event){
        //console.log("input field updated with "+evt.target.value);
        this.setState = ( { value: event.target.value } )
    }
    
    
    render() {
        return (
            <div>
                <h1>Main App Component Rendering</h1>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.updateInputValue.bind(this)}/> 
                </label>
                
                   
                
            </div>
        )
    }

}


ReactDOM.render(
  <App />,
  document.getElementById('main')
);

