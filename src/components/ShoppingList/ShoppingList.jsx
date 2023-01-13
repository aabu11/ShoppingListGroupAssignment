import './ShoppingList.css';

function ShoppingList({shoppingList}){
        return(
            <>
                <div>
                    <h2 id='shoppingTitle'>Shopping List</h2>
                    <button id='resetBtn'>Reset</button>
                    <button id='clearBtn'>Clear</button>
                </div>
                <br/>
                <div>
                    {shoppingList.map(shopping => (
                        <div className='shoppingList' key={shopping.id}>
                            <p>{shopping.name}</p>
                            <p>{String(shopping.quantity)}</p>
                            <p>{shopping.unit}</p>
                            {shopping.bought ? <p>Bought</p> : <button>Buy</button>}
                            <button>Delete</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
export default ShoppingList;