import React from 'react';
import Navbar from './Navbar/navbar.jsx';
import Grid from './Sequencer/grid.jsx';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Navbar />
      </div>
    )
  }
}

export default App;
