import React, { Component } from 'react';
import propTypes from 'prop-types'

class ListItem extends Component {
    
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() { 
        return (
            <li onClick={this.handleClick}>
            {this.props.addname}添加了 - {this.props.content}
            </li> 
            );
    }

    handleClick(){
        this.props.deleteList(this.props.index)
    }
}
 
ListItem.propTypes={
    addname:propTypes.string.isRequired,
    content:propTypes.string,
    index:propTypes.number,
    deleteList:propTypes.func
}
ListItem.defaultProps={
    addname:'乙方'
}
export default ListItem;