import React from "react";

class TodoForm extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            task: ""
        }
    }

    changeHandler = event => {
        this.setState({ task: event.target.value })
    }

    clickButtom = event => {
        event.preventDefault();
        this.props.add(this.state.task)
        this.setState({ task: ''});
    }

    render () {
        return (
            <div>
                <form onSubmit={this.clickButtom}>
                    <input
                        type= "text"
                        value={this.state.task}
                        onChange={this.changeHandler}
                        placeholder="Task"
                        name="task"    
                    />
                    <button type="submit">Add Todo</button>
                </form>
            <div>
                <button>Clear Completed</button>
            </div>
            </div>
        )
    }
}

export default TodoForm;