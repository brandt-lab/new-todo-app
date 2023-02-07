import React,{useState} from 'react'

function allTodo(props) {

// const handleDelete=(e)=>{
//     e.preventDefault()
//      props.delete(props.todo.id)
// console.log("delete")
// }

  return (
    <div>
        {props.todo.map((item, index)=>{
            return (
                <ol key={index}>
                    <li>{item}</li>
                    <button>Edit</button> <button onClick={(e)=>{props.delete(index)}}>Delete</button>
                </ol>
            )
        })}
    </div>
  )
}

export default allTodo;