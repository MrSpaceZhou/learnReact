import React, { Component } from 'react'
import './style.css'
import ListItem from './ListItem'

class ListInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    };
    render() {
        return (
            // flex布局,引入Fragment,shi
            <div>
                <div>
                    <label htmlFor="addName">输入增加：</label>
                    <input id="addName" className="input" placeholder='请输入内容' value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)} >增加内容</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    <ListItem
                                    key={item + index} 
                                    content={item}
                                    index={index} 
                                    deleteList={this.deleteList.bind(this)}
                                    />
                            )
                        })
                    }
                </ul>
            </div >
        )
        // var child1 = React.createElement('li',nnull,'add1')
    };
    //输入框输入
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    //增加列表
    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''

        })
    }
    //删除列表项
    deleteList(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}

export default ListInput