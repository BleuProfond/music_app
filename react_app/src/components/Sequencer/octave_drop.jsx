import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

class OctaveDropMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
      return (
        <div className="octdrop">
          <label>OCTAVE</label>
          <DropDownMenu 
            value={this.state.value} 
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText="0"/>
            <MenuItem value={2} primaryText="1"/>
            <MenuItem value={3} primaryText="2"/>
            <MenuItem value={4} primaryText="3"/>
            <MenuItem value={5} primaryText="4"/>
            <MenuItem value={6} primaryText="5"/>
          </DropDownMenu>
        </div>
      )
    }
}

export default OctaveDropMenu;
