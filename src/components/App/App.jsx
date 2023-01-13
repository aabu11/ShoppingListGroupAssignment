import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
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

    // POST route is in Form.jsx
    
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
            <Form getShoppingList={getShoppingList}/>
            <ShoppingList shoppingList={shoppingList} />
        </div>
    );
}

export default App;
