import React,{useState}from 'react'

export const todoForm = () => {
  const [value,setValue]=useState ("")
  const handlesubmit = e => {
    e.preventDefault();
    console.log(value)
  }
  return (
    <form className='TodoForm'>
        <input type= "text" className='todo-input'
        placeholder='what is the task today?' />
        <button type = 'submit' className='todo-btn'></button>
    </form>
  )
}
