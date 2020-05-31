import React from "react";
import Quantity from "./Quantity";

function Product(props) {

  function handleIncrement(item) {
    props.onIncrement(props.item.id);
  }

  function handleDecrement() {
    props.onDecrement(props.item.id);
  }
  return (
    <span>
      {props.itemName} - {props.price} - 
      <Quantity quantity={props.itemQuantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </span>
  );
}

export default Product;
