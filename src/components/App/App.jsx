import React from 'react';
import axios from 'axios'
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
export default App;
