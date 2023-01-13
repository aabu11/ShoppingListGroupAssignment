import "./ShoppingList.css";
import axios from 'axios';
import React from "react";
function ShoppingList(props) {
  function deletePost(event) {
    axios
      .delete(`/shopping/${event.currentTarget.id}`)
      .then(() => {
        props.getShoppingList();
        alert("Item deleted!");
      });
  }

  return (
    <>
      <div>
        <div id="shoppingTitle">Shopping List</div>
        <button id="resetBtn">Reset</button>
        <button id="clearBtn">Clear</button>
        {props.shoppingList.map((shopping) => (
          <div className="shoppingList" key={shopping.id}>
            <div>{shopping.name}</div>
            <div>{String(shopping.quantity)}</div>
            <div>{shopping.unit}</div>
            {shopping.bought ? <div>Bought</div> : <button>Buy</button>}
            <button id={shopping.id} onClick={deletePost}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShoppingList;
