import React from 'react';
import Dot from './dot.jsx';

class Row extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    var dots = [];
    for(var i = 0; i < 16; i++){
      dots.push(<Dot key={i} id={i} rowIndex={this.props.rowIndex} active={ this.props.active }/>);
    }        
    return(<tr>{dots}</tr>)
  }
}

export default Row;

