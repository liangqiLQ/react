import React,{Component} from 'react';
import Listitem from './Listitem';
import Newitem from'./Newitem'
class Todolist extends Component{

    constructor(props){
        super(props);
        this.state = {
            todoList : [
                {content:'react practice',done:true},
                {content:'game time',done:false}
            ]
        }
    }

    addNewItem = (newItemContent) => {
        const newList = [...this.state.todoList,{content:newItemContent,done:false}];
        this.setState({
            todoList: newList
        })
    }

    render(){
        return(
          <div>
            {
              this.state.todoList.map(item=><Listitem item = {item}/>)
            }
            <Newitem addItem={this.addNewItem}/>
          </div>
        );
    }
}

export default Todolist;