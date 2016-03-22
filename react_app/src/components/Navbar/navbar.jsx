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
        <div className="projcredentials">
          <ProjectDropMenu />
          <div className="projbuttons">
            <h6>Welcome, {this.state.name}</h6>
            <div>Logout</div>
          </div>
        </div>
      </div>   
    )
  }

}

export default Navbar;