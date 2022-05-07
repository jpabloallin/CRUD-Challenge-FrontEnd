import React, { useContext, useState, useEffect } from "react";
import { Store } from "../provider/StoreProvider";
import Category from "./Category";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const CategoryToDo = () => {

  const { state, dispatch } = useContext(Store);
  const [category, setCategory] = useState({});
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [todosList, setTodosList] = useState([]);
  //const [categoryId, setCategoryId] = useState([]);


    /**
     * Display all categories with to-dos from database.
     */
    useEffect(() => {
        let listOfCategories =  fetchAllCategories().then(
            categories => {
                let action = {
                    type: "get-categories",
                    payload: categories
                }

                dispatch(action)
            }
        )
    }, [])

    const fetchAllCategories = async () => {
        let response = await fetch(`http://localhost:8081/api/get/categories`)
        let data = await response.json()
        console.log(data);
        return data
    }

    /**
     * Delete a category from the database.
     * @param {*} category 
     */
    const removeCategory = async (category) => {
        
        let response = await fetch(`http://localhost:8081/api/delete/category`,
        {
            method: 'DELETE'
        })

        if (response) {
            dispatch({
                type: 'delete-category',
                payload: category,
            })
        }
    }

  const removeTodo = (todo) => {
    dispatch({
      type: "delete-todo",
      payload: todo,
    });
  };

  return (
    <div className="m-5 ">
      <h2 className="fw-bold ">
        {state.map((category, index) => (
          <div
             key={index} 
            className="m-5 border border-dark border-3 rounded"
          >
            <hr className="border border-dark" />
            <hr className="border border-dark" />
            <hr className="border border-dark" />
            <Category category={category} removeCategory={removeCategory} />
            <ToDoForm categoryId={category.id} />
            <hr className="border border-dark" />
            {category.todos.map((todo) => (
              <ToDo key={todo.id} removeTodo={removeTodo} todo={todo} />
            ))}
          </div>
        ))}
      </h2>
    </div>
  );
};

export default CategoryToDo;
