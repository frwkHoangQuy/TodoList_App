import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [changeInputIndex, setChangeInputIndex] = useState(0);
  const [changeInputValue, setChangeInputValue] = useState("");
  const [ulElement, setUlElement] = useState(<ul></ul>);
  const inputElement = (
    <input
      onChange={(e) => setChangeInputValue(e.target.value)}
      onBlur={e => e.target.value = ''}
    >
    </input>
  )
  const buttonElement = (
    <button onClick={handleClick}>
      Add
    </button>
  );
  function handleClick() {
    if (changeInputValue) {
      const newLiElement = (
      <li key={changeInputIndex}>{changeInputValue}</li>
      );
      const newButtonElement = (
        <button key={changeInputIndex} onClick={handleDeleteClick()}>Delete</button>
      )
      const updatedUlElement = React.cloneElement(ulElement, {
        children: [ulElement.props.children, newLiElement, newButtonElement],
      });
      setUlElement(updatedUlElement);
      function handleDeleteClick(){
      }
      setChangeInputValue('');
      setChangeInputIndex(changeInputIndex+1);
    }
  }
  return (
    <div style={{ padding: 32 }}>
      {inputElement}
      {buttonElement}
      {ulElement}
    </div>
  );
}

export default App;
