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
      <Grid active={this.props.active} />
    </div>)
  }
}

export default Sequencer;
