import React from 'react';

class OctaveMenu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'OctaveMenu';
    }
    render() {
        return (
          <div className="octmenu">
            <div className="input-field col s12" id="octfield">
              <select>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <label>OCTAVE</label>
            </div>    
          </div>
        )
    }
}

export default OctaveMenu;
