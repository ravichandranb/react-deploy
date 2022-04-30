import { useState } from "react";
import React from "react";

/* useState is a Hook.
Meant for functional components.
Whatever starts with use.. are Hooks*/
/* useState(initial, tag)..
initial --> is the initial value*
const [msg, setMsg]= useState("welcome")..
[msg] will have value as "welcome"..
setMsg is a method used for updating [msg] value*/

/*we dont need 'import React from react' 
for functional components*/

const GreetComponent = () => {
  const [msg, setMsg] = useState("initial");
  let [{ firstname, lname }, setfullName] = useState({
    firstname: "john",
    lname: "henry",
  });
  let [count, setcount] = useState(0);
  const changeMessage = () => {
    console.log("function is called");
    setMsg("new");
    setfullName({ firstname: "henry", lname: "john" });
    setcount(count + 1);
  };
  return (
    <div>
      {console.log(firstname)}
      <h5>Hi: {firstname}</h5>
      <h5>Welcome: {msg}</h5>
      <h5>Counter: {count}</h5>
      <button onClick={changeMessage}>Change</button>
    </div>
  );
};
export default GreetComponent;
