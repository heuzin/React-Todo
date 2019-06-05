import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList:[],
      task: "",
      id: "",
      completed: ""
    }
  }

  submitHandler = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }

  render() {
    return (
      <div>
        <TodoList list={this.state.todoList}/>
        <TodoForm add={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
