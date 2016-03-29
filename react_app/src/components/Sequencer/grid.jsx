import React from 'react';
import Row from './row.jsx';

class Grid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    var rows = [];
    for(var i = 0; i < 15; i++){
      rows.push(<Row className="row" id={i} key={i} active={this.props.active} />);
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
