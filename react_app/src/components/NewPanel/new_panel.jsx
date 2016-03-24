import React from 'react';
import InstrumentButtons from './inst_buttons.jsx';

class NewPanel extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NewPanel';
    }
    render() {
        return (<div className="new">
          <h5>New</h5>
          <InstrumentButtons />
        </div>)
    }
}

export default NewPanel;
