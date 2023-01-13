
import axios from 'axios';
import './ShoppingList.css';
import React from "react";
function ShoppingList(props){
  
        const handleBuyClick = (event) => {
            let id = event.currentTarget.id
            axios.put(`/shopping/${id}`, 
                    {
                        bought: true
                    }).then((response) => {
                        props.getShoppingList()
                    }).catch(err => { 
                        console.log(err);
                    });
        }
    
        return(
            <>
                <div>
                    <div id='shoppingTitle'>Shopping List</div>
                    <button id='resetBtn'>Reset</button>
                    <button id='clearBtn'>Clear</button>
                    {props.shoppingList.map(shopping => (
                        <div className='shoppingList' key={shopping.id}>
                            <div>{shopping.name}</div>
                            <div>{String(shopping.quantity)}</div>
                            <div>{shopping.unit}</div>
                            {shopping.bought ? <div>Bought</div> : <button id={shopping.id} onClick = {handleBuyClick}>Buy</button>}
                            <button>Delete</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
export default ShoppingList;