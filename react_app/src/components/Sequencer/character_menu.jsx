import React from 'react';

class CharacterMenu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CharacterMenu';
    }
    render() {
        return(
          <div className="charmenu">
            <form action="#">
              <input name="group1" type="radio" id="test1" />
              <label for="test1">SMOOTH</label>
              <input name="group1" type="radio" id="test2" />
              <label for="test2">NEUTRAL</label>
              <input name="group1" type="radio" id="test3" />
              <label for="test3">AGGRESSIVE</label>
            </form>
          </div>
        )
    }
}

export default CharacterMenu;
