import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

class CharacterDropMenu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CharacterDropMenu';
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
          <div className="chardrop">
            <label>CHARACTER</label>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="SMOOTH"/>
              <MenuItem value={2} primaryText="NEUTRAL"/>
              <MenuItem value={3} primaryText="AGGRESSIVE"/>
            </DropDownMenu>
          </div>
        )
    }
}

export default CharacterDropMenu;
