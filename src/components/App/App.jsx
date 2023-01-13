import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import ResetButton from '../ResetButton/ResetButton.jsx'
import ClearButton from '../ClearButton/ClearButton.jsx'
import './App.css';



function App() {
    let [shoppingList, setShoppingList] = useState('');
    useEffect(() => {
        getShoppingList()
      }, [])
      
    // GET
      const getShoppingList = () => {
        axios.get('/shopping')
          .then(response => {
            console.log('in app get')
            console.log(response.data)
            setShoppingList(response.data)
          })
          .catch(err => {
            alert('error getting shopping list');
            console.log(err);
          })
      }

    // POST
    const addItem = () => {
        axios.post('/shopping',
            {
                name: newName,
                quantity: newQuantity,
                unit: newUnit
            }
        ).then(response => {
            console.log('response:', response)
        }).catch(error => {
            console.log('Error in POST client', error)
        })
    }
    
    // DELETE
    function deleteItem (e){
      const id = this.state.id;
      e.preventDefault();
      axios.delete('/shopping')
        .then(res => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })


}

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <h1 id='shoppingTitle'>Shopping List</h1>
                <h2>
                    <ResetButton getShoppingList={getShoppingList} className='clearandresetbtns'/>
                    <ClearButton getShoppingList={getShoppingList} className='clearandresetbtns'/>
                </h2>
            <>
                {shoppingList && <ShoppingList shoppingList={shoppingList}/>}
            </> 
        </div>
    );
}

export default App;
