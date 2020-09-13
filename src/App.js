import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/todoItem.component'

function App() {

  const [inputlist, setInputList] = useState("");
  const [items,setItems] = useState([]);
  
  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listofItems = (event) => {
    setItems((previousItems) => {
      return [...previousItems,inputlist]
    });
    setInputList("");
  }

  const deleteItem = (id) =>{
    setItems((oldValues)=>{
      return oldValues.filter((item,index)=>{
        return index != id
      })
    })
  }

  return (
  <>
  <div className="main_div">
    <div className="center_div">
      <br/>
      <h1> ToDo List </h1>
      <br />
      <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputlist} />
      <button onClick={listofItems} > + </button>
      <ol>
        {
          items.map((element,index)=>{
            return  <TodoItem key={index} id={index} text={element} 
            onSelect = {deleteItem}
            />;
          }) 
        }
      </ol>
    </div>
  </div>



  </>
  )
}

export default App;
