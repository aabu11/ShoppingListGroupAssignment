import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

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

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
