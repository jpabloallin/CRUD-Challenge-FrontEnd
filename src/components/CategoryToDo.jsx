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
    <div className="m-5 ">      
      <h2 className="fw-bold ">
        {state.map((category) => (
          <div key={category.id} className="m-5 border border-dark border-3 rounded">
            <hr className="border border-dark"/>
            <hr className="border border-dark"/>
            <hr className="border border-dark"/>
            <Category category={category} removeCategory={removeCategory}/>
            <ToDoForm categoryId={category.id}/>
            <hr className="border border-dark"/>
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