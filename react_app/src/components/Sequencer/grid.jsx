import React from 'react';
import Row from './row.jsx';

class Grid extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  active(e) {
    var btn = e.target;
    if (btn.style.background != "red") {
      btn.style.background = "red";
    } else {
      btn.style.background = "grey";
    }    
  }

  loop(e) {
    console.log('click');
  }

  render(){
    var rows = [];
    for(var i = 0; i < 12; i++){
      rows.push(<Row key= {i} active={this.active} />);
    }

    return (
      <div className="sequencer">
        <h5>Sequencer</h5>
        <div className="grid">
          <table>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Grid;

// add function that can grab the id of a key and 
    //dynamic class names
    //changing the state to correspond with the dynamic class name.
    // react modifying css
    // keys need to be assinged to each dot as they are created