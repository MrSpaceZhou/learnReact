import React, { Component } from 'react'

class List extends Component {
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
                    <input placeholder='请输入内容' value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)} >增加服务</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index + item} onClick={this.deleteList.bind(this,index)}>{item}</li>
                    })}
                </ul>
            </div>
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
    deleteList(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }

}

export default List