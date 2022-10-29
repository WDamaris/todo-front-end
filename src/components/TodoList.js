import React from 'react'
import List from './List'
function TodoList({todo,setTodo}) {
  return (
    <div>
        <ul>
          {todo.map((eachTodo)=>(
            <List 
            text={eachTodo.text} 
            key={eachTodo.id}
            eachTodo={eachTodo}
            setTodo={setTodo}
            todo={todo}
            />
          ))}
          
    
        </ul>
    </div>
  )
}

export default TodoList