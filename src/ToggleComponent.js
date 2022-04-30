import React from "react";
class ToggleComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "john",
      email: "abc@email.com",
      status: false,
    };
  }
  togglestatus = () => {
    this.setState({ status: !this.state.status });
  };
  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            <h1>{this.state.username}</h1>
            <button onClick={this.togglestatus}>Logout</button>
          </div>
        ) : (
          <button onClick={this.togglestatus}>Login</button>
        )}
      </div>
    );
  }
}

export default ToggleComponent;
