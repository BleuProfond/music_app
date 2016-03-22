import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class ProjectDropMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
      return (
        <div className="projdrop">
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="proj1"/>
            <MenuItem value={2} primaryText="proj2"/>
            <MenuItem value={3} primaryText="proj3"/>
          </DropDownMenu>
        </div>
      )
    }
}

export default ProjectDropMenu;
