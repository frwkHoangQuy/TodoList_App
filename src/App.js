import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [changeInputValue, setChangeInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (e) => {
    setChangeInputValue(e.target.value);
  };

  const handleAddItemClick = (event) => {
    if (changeInputValue && (event.key === 'Enter' || event.type === 'click')) {
      const newItem = { id: Date.now(), value: changeInputValue };
      setListItems([...listItems, newItem]);
      setChangeInputValue('');
    }
  };

  const handleDeleteItemClick = (itemId) => {
    const updatedListItems = listItems.filter((item) => item.id !== itemId);
    setListItems(updatedListItems);
  };
  const handleDeleteAllItemClick = () => {
    setListItems([]);
  }
  const divElement = (
    <div className="container" onKeyDown={handleAddItemClick}>
      <h1 className="title">TodoList</h1>
      <div className="inputArea">
        <input
          className="inputField"
          value={changeInputValue}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={handleAddItemClick}>Add</button>
        <button className='deleteAllButton' onClick={handleDeleteAllItemClick}>Delete All</button>
      </div>
      <ul className="todoList">
        {listItems.map((item) => (
          <li key={item.id}>
            {item.value}
            <button className="deleteButton" onClick={() => handleDeleteItemClick(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
  return divElement;
}

export default App;
