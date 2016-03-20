import React from 'react';
import GridCountainer from './sequencer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  buttonClicked = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  
  render() {
    return(
      <div>
        <h2>Count: { this.state.counter }</h2>
        <button onClick={ this.buttonClicked }>Click me!!</button>
        <GridCountainer></GridCountainer>
      </div>
    )
  }
}

export default App;