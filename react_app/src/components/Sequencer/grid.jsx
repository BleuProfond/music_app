import React from 'react';
import Row from './row.jsx';

class Grid extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    var rows = [];
    for(var i = 0; i < 12; i++){
      rows.push(<Row />);
    }

    return (<div className="grid">
              <table>{rows}</table>
            </div>
    )
  }
}

export default Grid;