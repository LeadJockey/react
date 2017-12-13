import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';

class ProjectTodo extends Component {
  constructor(props) {
    super(props);
    this.state            = {
      todoList: [
        {id: uuidv4(), title: 'todo0', isUpdating: true,},
        {id: uuidv4(), title: 'todo1', isUpdating: false,},
      ]
    };
    this.handleAddTodo    = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  handleAddTodo(e) {
    console.log(e.charCode);
    if (e.charCode !== 13) {
      return false;
    }
    this.setState({
      todoList: this.state.todoList.concat([{id: uuidv4(), title: e.target.value, isComplete: false,}])
    });
    e.target.value = '';
  }

  handleRemoveTodo(targetId) {
    this.setState({
      todoList:this.state.todoList.filter((item)=>{
        if(item.id !== targetId){
          return item;
        }
        return false;
      })
    });
  }

  handleUpdateTodo(targetId){
    this.setState({
      todoList:this.state.todoList.map((item)=>{
        if(item.id === targetId){
          item.isUpdating = true;
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div className="project-todo">
        <input type="text"
               placeholder="what to do..?"
               onKeyPress={this.handleAddTodo}/>
        {this.state.todoList.map((item) =>
          <p key={item.id}>
            {
              item.isUpdating ?
                <input type="text" value={item.title}/>
                :
                item.title
            }
            {
              item.isUpdating ?
                <button >ok</button>
                :
                <button onClick={() => this.handleUpdateTodo(item.id)}>update</button>
            }

            <button onClick={() => this.handleRemoveTodo(item.id)}>remove</button>
          </p>
        )}
      </div>
    );
  }
}

export default ProjectTodo;