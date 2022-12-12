// 11/12/22

// importing the react.js,css and components
import React, { useState } from 'react';
import './index.css'
import TodoList from './TodoList'

function App() {
  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    // whenever the changes are made in input feild  it is called and it set's data in inputList
    setInputList(e.target.value)
  }

  const addList = () => {
    // whenever add(+) button is clicked this function is called,
    // oldData -> this parameter returns the old inputted value
    setItems(oldData => {
      // here returning old and new added data as an array
      return [...oldData, inputList];
    })
    // after returning the array make inputList empty  so that input feild has value null
    setInputList("")
  }

  const deleteItem = (id) => {
    // deleting the todo's 
    setItems((oldData) => {
      return oldData.filter((arrele,index) => {
        // if index not equal to id then it will return todo's else no.
        return index!==id
      })
    })
  }
  
  // returning html part....
  return (
    <React.Fragment>
      <div className='todo-box'>
        <header> <h1>Todo - List</h1> <i className="fa-solid fa-calendar-check"></i></header>
        <main>
          <div className='inputDiv'>
            <input type='text' placeholder='Your Todo' value={inputList} onChange={itemEvent} />
            <i className="fa-solid fa-plus" onClick={addList}></i>
          </div>
        </main>
        <div className='data'>
          <ul>
            {items.map((ele,index) => {
              return <TodoList key={index}  id={index} text={ ele } onSelect={deleteItem} />
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;