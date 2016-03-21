import React from 'react';

class VolumeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'VolumeMenu';
    }
    render() {
        return (
          <div className="volmenu">
            <label for="volslider">VOLUME</label>
            <input type="range" id="volslider" value="100"></input>
          </div>
        )
    }
}

export default VolumeMenu;
