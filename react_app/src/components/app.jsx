import React from 'react';
import Navbar from './Navbar/navbar.jsx';
import Grid from './Sequencer/grid.jsx';
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
        <Grid />
        <NewPanel />
        <SettingsPanel />
      </div>
    )
  }
}

export default App;
