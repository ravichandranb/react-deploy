import React from "react";
import PendingComponent from "./PendingComponent";
import CompletedComponent from "./CompletedComponent";
import BinComponent from "./BinComponent";

class TodoComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todos: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { todos: props.prop1 };
  }

  getCompletedItem = () => {
    const arr = this.state.todos.filter(
      (item) => item.completed === true && item.active === true
    );
    return arr;
  };
  getPendingItem = () => {
    const arr = this.state.todos.filter((item) => item.completed === false);
    return arr;
  };
  getTrashItem = () => {
    const arr1 = this.state.todos.filter((item) => item.active === false);
    return arr1;
  };
  changeCompletionstatus = (todoID) => {
    /*
      const obj = this.state.todos.find((item) => item.id === todoID);
     obj.completed = !obj.completed;
      this way of changing State value is not recommended.
      Use following method instead */

    const temp = [...this.state.todos];
    const obj = temp.find((item) => item.id === todoID);
    obj.completed = !obj.completed;
    this.setState({ todos: temp });
  };
  changeActivestatus = (todoID) => {
    /*
      const obj = this.state.todos.find((item) => item.id === todoID);
     obj.completed = !obj.completed;
      this way of changing State value is not recommended.
      Use following method instead */

    const temp = [...this.state.todos];
    const obj = temp.find((item) => item.id === todoID);
    obj.active = !obj.active;
    this.setState({ todos: temp });
  };

  render() {
    return (
      <div>
        <PendingComponent
          prop1={this.getPendingItem()}
          prop3={this.changeCompletionstatus}
        ></PendingComponent>
        <hr></hr>

        <CompletedComponent
          prop2={this.getCompletedItem()}
          prop4={this.changeActivestatus}
          prop6={this.changeCompletionstatus}
        ></CompletedComponent>
        <hr></hr>
        <hr></hr>
        <BinComponent
          prop4={this.getTrashItem()}
          prop5={this.changeActivestatus}
        ></BinComponent>
        <hr></hr>

        <button>Debug Button</button>
      </div>
    );
  }
}

export default TodoComponent;
