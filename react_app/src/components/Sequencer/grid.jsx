import React from 'react';
import Row from './row.jsx';

class Grid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  // active(e) {
  //   var btn = e.target;

  //   var notes = [
  //   1046.50, 1108.73,1174.66,1244.51,
  //   1318.51,1396.91,1479.98,1567.98,
  //   1661.22,1760.00,1864.66,1975.53
  //   ];    
  //   var track = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  
  //   // console.log(btn.closest('tr'));
  //   if (btn.style.background != "red") {
  //     btn.style.background = "red";
  //   } else {
  //     btn.style.background = "grey";
  //   }  

  //   var cell = btn.parentNode.cellIndex;
  //   var row = btn.parentNode.parentNode.rowIndex;

  //   // console.log(track);
  //   // row = cell.parentNode.rowIndex;
  //   // console.log(cell);
  //   // var row_note = notes[row];
  //   // var notes_array = this.state.track;
  //   // notes_array[cell] = row_note;
  //   // this.setState({track: notes_array});
  //   // console.log(this.state.track);
  // }

  // soundScheduler(e) {
  //   // var cellIndex  = this.cellIndex + 1;
  //   // var rowIndex = this.parentNode.rowIndex + 1;
  // }

  render(){
    var rows = [];
    for(var i = 0; i < 12; i++){
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
