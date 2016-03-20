import React from 'react';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loggedin: false
    }
  }

  render() {
    return(<div className="nav">
        <h3>
          DEMO
        </h3>
        <h3>
          Meh
        </h3>
      </div>   
    )
  }

}

export default Navbar;