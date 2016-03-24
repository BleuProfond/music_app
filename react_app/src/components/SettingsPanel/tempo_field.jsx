import React from 'react';

class TempoField extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TempoField';
    }
    render() {
        return (<div className="tempo">
          <div>
            <label for="tempofield">TEMPO</label>
          </div>         
          <div>
            <input id="tempofield" placeholder="120"></input>
          </div>       
        </div>)
    }
}

export default TempoField;
