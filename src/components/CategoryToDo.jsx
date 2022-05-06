import React, { useContext, useState } from 'react'
import { Store } from '../provider/StoreProvider';
import Category from './Category';
import ToDo from './ToDo';

const CategoryToDo = () => {

  const[category, setCategory] = useState({})
  const [name, setName] = useState('')
  const[id, setId] = useState('')
  const [todosList, setTodosList] = useState([])

  const removeTodo = (todoId) => {

    dispatch({
      type: 'delete-todo',
      payload: {
        }
    })
  }

  const updateTodo = (todoId) => {

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
        {state.listOfCategories.map((category) => (
          <div>
            <hr/>
            <Category category={category} removeCategory={removeCategory} />
            <hr/>
            {category.todos.map(todo => (
              <ToDo removeTodo={removeTodo} todo={todo} updateTodo={updateTodo}/>
            ) )}
          </div>
        ))}
      </h2>
    </div>
  )
}

export default CategoryToDo