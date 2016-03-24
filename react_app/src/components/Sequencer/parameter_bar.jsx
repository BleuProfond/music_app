import React from 'react';
import CharacterDropMenu from './character_drop.jsx';
import OctaveDropMenu from './octave_drop.jsx';
import VolumeSlider from './volume_slider.jsx';

class ParameterBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ParameterBar';
    }
    render() {
        return (<div className="parambar">
                    <div className="left">
                        <CharacterDropMenu />
                        <OctaveDropMenu />
                    </div>
                    <div className="right">
                        <VolumeSlider />  
                    </div>                           
                </div>
        )
    }
}

export default ParameterBar;
