import React from "react";

/* This component is called as Display Component or Dummy component. 
Notice that it is neither a Class Component nor a Functional Component*/

const PendingComponent = (props) => {
  console.log("pending");
  return (
    <div>
      <h5>Pending Component</h5>
      {props.prop1.map((item, key) => (
        <div key={item.id}>
          <h6>
            {item.id}..
            {item.title}
          </h6>
          <button onClick={() => props.prop3(item.id)}>Done</button>
        </div>
      ))}
    </div>
  );
};

export default PendingComponent;
