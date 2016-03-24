import React from 'react';

class Metronome extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Metronome';
  }
  render() {
    return(
      <div className="metronome">
        <div id="metclock"></div>
        <div id="metbutton">METRONOME</div>
      </div>
    )
  }
}

export default Metronome;
