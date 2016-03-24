import React from 'react';
import TempoField from './tempo_field.jsx';
import ProjectButtons from './project_buttons.jsx';
import Metronome from './metronome.jsx';

class SettingsPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(<div className="settings">
      <div className="top">
        <TempoField />
      </div>
      <div className="middle">
        <ProjectButtons/>
      </div>
      <div className="bottom">
        <Metronome />
      </div>
    </div>)
  }

}

export default SettingsPanel;