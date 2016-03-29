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
    for(var i = 0; i < 12; i++){
      rows.push(<Row className="row" id={i} key={i} active={this.props.active} />);
    }

    return (
      <div className="sequencer">
        <div className="grid">
          <div id="kickbutton">KICK</div>
          <table id="kicktable">
            <tbody>
              <Row className="row" id={i} key={i} active={this.props.active} /> 
            </tbody>
          </table>
        </div>
        <br/>
        <div className="grid">
          <div id="snarebutton">SNARE</div>
          <table id="snaretable">
            <tbody>
              <Row className="row" id={i} key={i} active={this.props.active} /> 
            </tbody>
          </table>
        </div>
        <div className="grid">
          <div id="hatbutton">HAT</div>
          <table id="hattable">
            <tbody>
              <Row className="row" id={i} key={i} active={this.props.active} /> 
            </tbody>
          </table>
        </div>
        <div className="grid">
          <div id="synthbutton">SYNTH</div>
          <table id="synthtable">
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
