import React,{Component} from 'react';
import './Listitem.css' 
class Listitem extends Component{

    constructor(props){
        super(props);
    }

    onChangeItem = (event) => {
        event.target.className = "done-item";
    }

    render(){
        if(this.props.item.done){
            return <p className="done-item">{this.props.item.content}</p>
        }else{
            return <p className="item" onClick={this.onChangeItem}>{this.props.item.content}</p>
        }
    }
    
}
export default Listitem