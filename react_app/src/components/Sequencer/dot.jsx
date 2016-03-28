import React from 'react';

class Dot extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
 
  render(){
    return(<td><div className="dot" onClick={this.props.active}></div></td>);
  }

}

export default Dot;

// this.props.key

// It sees which buttons are clicked.

// It determines which row the clicked.

// Based on which button is clicked what row it's in.