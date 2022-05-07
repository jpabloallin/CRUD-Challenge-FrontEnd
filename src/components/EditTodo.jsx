import { useContext, useState, useRef } from "react"

const EditTodo = ({updateTodo, todo}) => {

  const [todoName, setTodoName] = useState('');

  const editTodo = (event) =>{
    const editedTodo = event.target.value
    setTodoName(editedTodo)
  }

  return (
    <div className= "d-flex align-items-center" >
      <input onChange={editTodo} type="text" name="editTodo" placeholder="Edit todo"
      className="form-control form-control-lg"/>
      <button onClick={() => updateTodo(todo, todoName)} className="btn btn-warning me-2 m-1">
        Change name</button>
    </div>
  )

}

export default EditTodo