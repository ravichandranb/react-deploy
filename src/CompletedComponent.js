import React from "react";

/* This component is called as Display Component or Dummy component. 
Notice that it is neither a Class Component nor a Functional Component*/

const CompletedComponent = (props) => {
  console.log("completed");

  return (
    <div>
      <h5>Completed Component</h5>
      {props.prop2.map((item, key) => (
        <div key={item.id}>
          <h6>
            {item.id}..
            {item.title}
          </h6>
          <button onClick={() => props.prop4(item.id)}>Delete</button>
          <button onClick={() => props.prop6(item.id)}>Move to Pending</button>
        </div>
      ))}
    </div>
  );
};

export default CompletedComponent;
