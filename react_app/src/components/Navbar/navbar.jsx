import React from 'react';
import ProjectDropMenu from './project_drop.jsx';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loggedin: false,
      name: 'Brandon'
    }
  }

  render() {
    return(<div className="nav">
        <h3>DEMO</h3>
        <ProjectDropMenu />
        <div className="projcredentials">
          <div className="navbuttons">
            <div><h6>Welcome, {this.state.name}</h6></div>
            <div id="logbutton">LOG OUT</div>
          </div>
        </div>
      </div>   
    )
  }

}

export default Navbar;