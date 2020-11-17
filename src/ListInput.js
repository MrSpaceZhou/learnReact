import React, { Component } from 'react'
import './style.css'
import ListItem from './ListItem'

class ListInput extends Component {
    //生命周期，在某一时刻，可以自动执行的函数
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    UNSAFE_componentWillMount(){
        console.log('UNSAFE_componentWillMount-------组件将要挂载在页面的时刻')
    }

    componentDidMount(){
        console.log("componentDidMount--------组件挂载完成的时刻")
    }

    render() {
        console.log('render--------组件挂载中')
        return (
            // flex布局,引入Fragment,shi
            <div>
                <div>
                    <label htmlFor="addName">输入增加：</label>
                    <input 
                        id="addName" 
                        className="input" 
                        placeholder='请输入内容' 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)} 
                        ref = {(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}  >增加内容</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    <ListItem
                                    /*addname='甲方'*/
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
            // inputValue: e.target.value
            inputValue : this.input.value
        })
    }
    //增加列表
    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
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