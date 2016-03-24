import React from 'react';
import Grid from './grid.jsx';
import ParameterBar from './parameter_bar.jsx';

class Sequencer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Sequencer';
    }
    render() {
        return(<div className="sequencer">
          <h5>Sequencer</h5>
          <Grid />
          <ParameterBar />
        </div>)
    }
}

export default Sequencer;
