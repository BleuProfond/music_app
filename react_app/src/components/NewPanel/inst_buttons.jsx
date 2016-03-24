import React from 'react';

class InstrumentButtons extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InstrumentButtons';
    }
    render() {
        return <div className="instbuttons">
          <div id="bassbutton">BASS</div>
          <div id="leadbutton">LEAD</div>
          <div id="kickbutton">KICK</div>
          <div id="snarebutton">SNARE</div>
          <div id="hatbutton">HAT</div>
          <div id="samplebutton">SAMPLE</div>
        </div>;
    }
}

export default InstrumentButtons;
