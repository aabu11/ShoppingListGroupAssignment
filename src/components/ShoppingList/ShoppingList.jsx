import './ShoppingList.css';
function ShoppingList(props){
        return(
            <>
                <div>
                    {props.shoppingList.map(shopping => (
                        <div className='shoppingList' key={shopping.id}>
                            <div>{shopping.name}</div>
                            <div>{String(shopping.quantity)} {shopping.unit}</div>
                            {shopping.bought ? <div>Bought</div> : <button>Buy</button>}
                            <button>Delete</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
export default ShoppingList;