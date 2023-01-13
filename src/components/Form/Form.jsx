import {useState} from 'react';
import axios from 'axios';
import './Form.css';

function Form({getShoppingList}) {
  let [itemInput, setItemInput] = useState('');
  let [quantityInput, setQuantityInput] = useState(0);
  let [unitInput, setUnitInput] = useState('');

  // POST
  const addItem = () => {
    axios.post('/shopping',
      {
        name: itemInput,
        quantity: quantityInput,
        unit: unitInput
      }
    ).then(response => {
      getShoppingList();
      console.log('response:', response)
    }).catch(error => {
      console.log('Error in POST client', error)
    })
}

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
    console.log('item submit!');
  }

  return (
    <>
      <h2>Add an Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item: </label>
          <input 
            type="text" 
            value={itemInput}
            onChange={(event) => setItemInput(event.target.value)}
          />
        <label>Quantity: </label>
          <input 
            type="number"
            value={quantityInput}
            onChange={(event) => setQuantityInput(event.target.value)}
          />
        <label>Unit: </label>
          <input 
            type="text"
            value={unitInput}
            onChange={(event) => setUnitInput(event.target.value)}
          />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;