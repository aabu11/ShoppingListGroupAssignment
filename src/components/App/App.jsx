import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import ResetButton from '../ResetButton/ResetButton.jsx'
import ClearButton from '../ClearButton/ClearButton.jsx'
import './App.css';



function App() {
    let [shoppingList, setShoppingList] = useState([]);
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

}

    return (
        <div className="App">
            <Header />
            <Form getShoppingList={getShoppingList}/>
            <h2 id='shoppingTitle'>Shopping List</h2>
            <ResetButton getShoppingList={getShoppingList} className='clearandresetbtns'/>
            <ClearButton getShoppingList={getShoppingList} className='clearandresetbtns'/>
            <ShoppingList getShoppingList={getShoppingList} shoppingList={shoppingList} />
        </div>
    );
}
export default App;
