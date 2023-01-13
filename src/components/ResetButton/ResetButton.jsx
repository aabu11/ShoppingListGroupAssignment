import axios from 'axios';
function ResetButton(props){
    const resetAll = () =>{
        axios.put('/resetandclear', { bought: 'false' })
        .then((response) =>{
            props.getShoppingList();
        }).catch((error) =>{
            console.log('error in resetbutton.js', error)
        })
    }
    return (
        <p>
            <button onClick={resetAll} id='resetBtn'>Reset</button>
        </p>
    )
}
export default ResetButton;