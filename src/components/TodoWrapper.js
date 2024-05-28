import { useState } from "react"
import { todoForm } from "./todoForm"
import { v4 as uuidv4 } from 'uuid';

uuidv4();

export const TodoWrapper = () => {
  const [todos,setTodos] =useState([])
  const addTodo = todo =>{
    setTodos([...todos,{id:uuidv4(),task:todo,
    completed:false,isEditing:false}])
    console.log (todos)
  }
return (
    <div className= 'TodoWrapper'> 
      <todoForm addTodo = {addTodo}/> 
    </div>
  )
}
