import axios from 'axios';
function ClearButton(props){
    const clearAll = () =>{
        axios.delete('/resetandclear')
        .then((response) =>{
            props.getShoppingList();
        }).catch((error) =>{
            console.log('error in resetbutton.js', error)
        })
    }
    return (
        <>
            <button onClick={clearAll} id='clearBtn'>Clear</button>
        </>
    )
}
export default ClearButton;