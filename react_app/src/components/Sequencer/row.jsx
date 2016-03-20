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
            dots.push(<Dot />);
        }        

        return(<div className="row"><tr>{dots}</tr></div>)
    }
}

export default Row;

