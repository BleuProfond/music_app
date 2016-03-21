import React from 'react';
import CharacterMenu from './character_menu.jsx';
import OctaveMenu from './octave_menu.jsx';
import VolumeMenu from './volume_menu.jsx'

class ParameterBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ParameterBar';
    }
    render() {
        return (<div className=".parambar">
          <CharacterMenu />
          <VolumeMenu />    
        </div>)
    }
}

export default ParameterBar;
