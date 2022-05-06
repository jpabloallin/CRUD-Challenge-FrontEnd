const ToDo = ({todo, removeTodo, updateTodo}) => {

  return (
    <div>
      <h5>{`${todo.name}`}</h5>
      <button onClick={() => removeTodo(todo)}>Remove Todo</button>
      <button onClick={() => updateTodo(todo)}>Edit Todo</button>
    </div>
  )
}

export default ToDo