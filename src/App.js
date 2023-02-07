import logo from './logo.svg';
import './App.css';
import Form  from "./components/Form"
import AllTodo from "./components/AllTodo"

import { useState } from 'react';

function App() {
  const [todos, setTodos]=useState([])

const addNewTodo=(newTodo)=>{
 const id = Math.random(Math.floor())

setTodos([...todos,newTodo ,id] )
console.log(todos)

}
const deleteUser=(id)=>{
 setTodos( todos.filter((item, index)=>{
    if(item.id!==id)
     return 
    //  setTodos(item)
})
 )

}

  return (
    <div className="App">
      <Form addNewTodo={addNewTodo}/>
      <hr/>
      <AllTodo delete={deleteUser} todo={todos}/>

    </div>
  );
}

export default App;
