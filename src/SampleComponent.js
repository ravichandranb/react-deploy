import React from "react";
class SampleComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      msg: "new",
    };
  }
  render() {
    return (
      <div>
        <h3>State: {this.state.msg}</h3>
        <h3>Props: {this.props.prop1}</h3>
      </div>
    );
  }
}

export default SampleComponent;
