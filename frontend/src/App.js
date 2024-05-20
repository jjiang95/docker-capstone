import './App.css';
import Item from './Item';
import React, { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/items')
    .then((r) => r.json())
    .then(items => {
      setItems(items)
    })
  }, [])
  
  function onDelete(id) {
    setItems(items.filter(item => item.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: e.target.elements.textInput.value}),
    })
    .then((r) => r.json())
    .then((newItem) => {
      setItems([...items, newItem])
    })
    e.target.elements.textInput.value = '';
  }
  
  return (
    <>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit} id="form">
          <label htmlFor="textInput">Add new item:</label>
          <br/>
          <input type="text" id="text" name="textInput"/>
          <br/>
          <button id='submit' type="submit" value="Submit">Submit</button>
      </form>

      <div id="list">
        {items.map((item => (
          <Item key={item.id} item={item} onDelete={onDelete}/>
        )))}      
      </div>
    </>
  );
}

export default App;
