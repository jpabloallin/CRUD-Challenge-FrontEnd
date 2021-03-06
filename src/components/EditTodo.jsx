import { useState, useRef } from "react"

/**
 * Component that renders the editTodo form 
 * @param {*} param0 
 * @returns 
 */

/**
 * On change function to edit name of todo
 * @param {*} param0 
 * @returns 
 */
const EditTodo = ({updateTodo, todo}) => {

  const formRef = useRef(null);
  const [todoName, setTodoName] = useState('');

  const editTodo = (event) =>{
    const editedTodo = event.target.value
    setTodoName(editedTodo)
  }

  return (
    <form ref={formRef}>
      <div className= "d-flex align-items-center" >
        <input onChange={editTodo} type="text" name="editTodo" placeholder="Edit todo"
        className="form-control form-control-lg"/>
        <button onClick={() => updateTodo(todo, todoName)} className="btn btn-warning me-2 m-1">
          Change name</button>
        </div>
    </form>
  )
}

export default EditTodo