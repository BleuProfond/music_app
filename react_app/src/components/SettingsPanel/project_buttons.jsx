import React from 'react';

class ProjectButtons extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'ProjectButtons';
  }
  render() {
    return(
      <div className="projbuttons">
        <div id="playbutton" onClick={ this.props.loop } onClick={ this.props.sound }>PLAY</div>
        <div id="savebutton" onClick={ this.props.stopTrack } >STOP</div>
      </div>
    )
  }
}

export default ProjectButtons;
