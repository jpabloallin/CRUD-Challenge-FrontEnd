const ToDo = ({todo, removeTodo, updateTodo}) => {

  return (
    <div>
      <h5>{`${todo.title}`}</h5>
      <button onClick={() => removeTodo(note.id)}>Remove Todo</button>
      <button onClick={() => updateTodo(note.id)}>Edit Todo</button>
    </div>
  )
}

export default ToDo