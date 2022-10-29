import React from 'react'
function Form({setInputText,setTodo,todo,inputText}) {

  const handleInputChange =(e)=>{
   setInputText(e.target.value)
   console.log(e.target.value)
  }

  const handleTodoSubmit=(e)=>{
    e.preventDefault()

    setTodo([
      ...todo, 
      {text: inputText, completed: false, id: Math.random() *1000 }
    ])
    setInputText("")
    
  }
  return (
    <div>
    <form>
    <input value={inputText} type="text" placeholder="Enter" onChange={handleInputChange}/>
       <button type="submit" onClick={handleTodoSubmit}>Add Todo </button>
    </form>
    </div>
  )
}

export default Form