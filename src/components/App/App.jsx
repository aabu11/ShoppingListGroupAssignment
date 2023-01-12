import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import './App.css';


function App() {
    let [shoppingList, setShoppingList] = useState('');
    useEffect(() => {
        getShoppingList()
      }, [])
    
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
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <>
                {shoppingList && <ShoppingList shoppingList={shoppingList}/>}
            </> 
        </div>
    );
}

export default App;
