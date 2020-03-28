import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { isTemplateElement } from '@babel/types';
import Todolistheader from './Todolistheader';
import Todolist from './Todolist';

class App extends Component{
  render(){
    return(
      <div className="App">
       <Todolistheader />
       <Todolist />
      </div>
    );
  }
}

export default App;
