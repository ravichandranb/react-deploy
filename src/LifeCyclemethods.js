import React from "react";
import "./LifeCyclemethods.css";

/* Lifecycle methods are different for Class componenents and 
functional components..*/

class LifeCyclemethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "initial",
      dummy: "React",
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("inside DS");
    console.log(props, state);
    return { msg: props.prop1 };
  }
  /*componentDidMount() {
    console.log("didmount");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  componentDidUpdate(prevprops, prevstate) {
    if (
      prevstate.count !== this.state.count ||
      prevprops.prop1 !== this.props.prop1
    ) {
      console.log("updated");
      console.log(prevprops.prop1);
    } else {
      console.log("not updated");
    }
  }*/
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.count !== this.state.count ||
      nextState.dummy !== this.state.dummy ||
      nextProps.prop1 !== this.props.prop1
    ) {
      return true;
    } else {
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log(prevstate.count);
  }
  sampleMethod = () => {
    this.setState({ count: this.state.count + 5 });
  };
  updateDummy = () => {
    this.setState({ dummy: "JS" });
  };

  render() {
    const mystyle = { color: "red" };
    console.log("inside render method");

    return (
      <div>
        <h5 style={mystyle}>LifeCyclemethods</h5>
        <h6>{this.state.msg}</h6>
        <h6>{this.state.count}</h6>
        <h6>{this.state.dummy}</h6>

        <button onClick={this.sampleMethod}>+</button>
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={this.updateDummy}>
          Update
        </button>
      </div>
    );
  }
}

export default LifeCyclemethods;
