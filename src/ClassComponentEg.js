import React from "react";
class ClassComponentEg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "initial",
    };
  }
  updateMessage = () => {
    this.setState({ msg: "new" });
  };

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>{this.props.prop1}</h3>
        <h3>{this.state.msg}</h3>
        <button onClick={this.updateMessage}>update</button>
      </div>
    );
  }
}

export default ClassComponentEg;
