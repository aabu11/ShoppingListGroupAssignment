import './ShoppingList.css';
function ShoppingList(props){
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
                            {shopping.bought ? <div>Bought</div> : <button>Buy</button>}
                            <button>Delete</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
export default ShoppingList;