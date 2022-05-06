const ToDo = ({todo, removeTodo, updateTodo}) => {

  return (
    <div className="border border-dark m-3 rounded border-2 d-flex justify-content-evenly">
      <h5 className="fw-bold m-2">{`${todo.name}`}</h5>
      <div>
      {" "}
      <button onClick={() => removeTodo(todo)} className="btn btn-danger me-2 m-1">Remove Todo</button>
      <button onClick={() => updateTodo(todo)} className="btn btn-warning">Edit Todo</button>
      </div>
      
    </div>
  )
}

export default ToDo