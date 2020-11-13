import React,{Component} from 'react'

class App extends Component{
    render(){
        return(
            <ul className='my-list'>
                <li>{false?'frome 1':'frome0'}</li>
                <li>frome 2</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'frome1')
        // var child2 = React.createElement('li',null,'frome2')
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}

export default App