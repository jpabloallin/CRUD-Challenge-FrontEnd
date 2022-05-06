const ToDo = ({todo, removeTodo, updateTodo}) => {

  return (
    <div>
      <h5>{`${todo.name}`}</h5>
      <button onClick={() => removeTodo(todo.id)}>Remove Todo</button>
      <button onClick={() => updateTodo(todo.id)}>Edit Todo</button>
    </div>
  )
}

export default ToDo