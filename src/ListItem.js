import React, { Component } from 'react';

class ListItem extends Component {
    
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() { 
        return (
            <li onClick={this.handleClick}>{this.props.content}</li> 
            );
    }

    handleClick(){
        this.props.deleteList(this.props.index)
    }
}
 
export default ListItem;