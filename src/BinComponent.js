import React from "react";
import _isEqual from "lodash/isEqual";
class BinComponent extends React.Component {
  constructor(props) {
    super();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (_isEqual(nextProps.prop4, this.props.prop4)) {
      return false;
    } else {
      return true;
    }
    /*if (nextProps.prop4 !== this.props.prop4) {
      return true;
    } else {
      return false;
    }*/
  }

  render() {
    console.log("bin");

    return (
      <div>
        <h5>Trash Component</h5>
        {this.props.prop4.map((item, key) => (
          <div key={item.id}>
            <h6>
              {item.id} {item.title}
            </h6>
            <button onClick={() => this.props.prop5(item.id)}>Restore</button>
          </div>
        ))}
      </div>
    );
  }
}

export default BinComponent;
