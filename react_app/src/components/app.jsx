import React from 'react';
import Navbar from './Navbar/navbar.jsx';
import Sequencer from './Sequencer/sequencer.jsx';
import SettingsPanel from './SettingsPanel/settings_panel.jsx';
import NewPanel from './NewPanel/new_panel.jsx'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="below">
          <Sequencer />
          <NewPanel />
          <SettingsPanel />
        </div>
      </div>
    )
  }
}

export default App;
