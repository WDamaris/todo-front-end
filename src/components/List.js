import React from 'react'
import {FaCheck,FaTrash} from 'react-icons/fa';
function List({text,setTodo,todo,eachTodo}) {
  const handleDelete=(()=>{
    setTodo(todo.filter((el)=>el.id !== eachTodo.id))
  })
  return (
    <div>
      <li>{text}
        <button className='complete'><FaCheck/></button>
        <button className='delete' onClick={handleDelete}><FaTrash /></button>
      </li>   
    </div>
  )
}

export default List