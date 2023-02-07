import React,{useState} from 'react'

function Form({addNewTodo}) {
    const [name, setName]=useState("")
    const handleChange=(e)=>{
        setName(e.target.value)
        // console.log(name)

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        addNewTodo(name)
        setName("")
    }
  return (
    <div>
        <form>
            <h1>Todo App</h1>
            <input  placeholder="add todo" name="name" value={name} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </form>

    </div>
  )
}

export default Form