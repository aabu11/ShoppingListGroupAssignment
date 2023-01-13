import axios from 'axios';
import './ShoppingList.css';
import React from "react";

function ShoppingList({ shoppingList, getShoppingList }) {
    const handleBuyClick = (event) => {
        let id = event.currentTarget.id
        axios.put(`/shopping/${id}`,
            {
                bought: true
            }).then((response) => {
                getShoppingList()
            }).catch(err => {
                console.log(err);
            });
    }
    return (
        <>
            <div>
                {shoppingList.map(shopping => (
                    <div className='shoppingList' key={shopping.id}>
                        <p>{shopping.name}</p>
                        <p>{String(shopping.quantity)}</p>
                        <p>{shopping.unit}</p>
                        {shopping.bought ? <p id="boughtText">Bought</p> : <button id={shopping.id} onClick={handleBuyClick}>Buy</button>}
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShoppingList;