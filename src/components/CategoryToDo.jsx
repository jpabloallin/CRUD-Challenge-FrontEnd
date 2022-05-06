import React, { useContext, useState } from 'react'
import { Store } from '../provider/StoreProvider';
import Category from './Category';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const CategoryToDo = () => {

  const[category, setCategory] = useState({})
  const [name, setName] = useState('')
  const[id, setId] = useState('')
  const [todosList, setTodosList] = useState([])

  const removeTodo = (todo) => {

    dispatch({
      type: 'delete-todo',
      payload: todo
    })
  }

  const updateTodo = (todo) => {
    
    dispatch({
        type: 'update-todo',
        payload: todo,
        newTitle: "new title"
      })
  }

  const removeCategory = (categoryId) => {
    dispatch({
      type: 'delete-category',
      payload: {
        id:categoryId     
      }
    })
  }

  const {state, dispatch} = useContext(Store)

  return (
    <div>      
      <h2>
        {state.map((category) => (
          <div key={category.id}>
            <hr/>
            <Category category={category} removeCategory={removeCategory} />
            <hr/>
            {category.todos.map(todo => (
              <ToDo key={todo.id} removeTodo={removeTodo} todo={todo} updateTodo={updateTodo}/>
            ) )}
          </div>
        ))}
      </h2>
    </div>
  )
}

export default CategoryToDo