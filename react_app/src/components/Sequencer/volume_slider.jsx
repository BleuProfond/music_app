import React from 'react';
import Slider from 'material-ui/lib/slider';

class VolumeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'VolumeSlider';
    }
    render() {
        return(<div className="volslider">
            <div><label>VOLUME</label></div>
            <div><Slider defaultValue={0.80}/></div>
          </div>
        )
    }
}

export default VolumeSlider;
