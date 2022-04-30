import React from "react";

function ProductsMenu(props) {
  return (
    <div className="container bg-warning text-center p-2">
      <h3>Welcome</h3>
      <img src={props.address} alt="noting"></img>

      <p>{props.note.make}</p>

      <button className="btn btn-primary">Check Tour</button>
    </div>
  );
}

export default ProductsMenu;
