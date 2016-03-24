import React from 'react';

class CounterPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  up = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  
  down = () => {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return(
      <div>
        <h2>Count: { this.state.counter }</h2>
        <button onClick={ this.up }>Up</button>
        <button onClick={ this.down }>Down</button>
      </div>
    )
  }
}

export default CounterPanel;