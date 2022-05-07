import React, { useContext, useState, useEffect } from "react";
import { Store } from "../provider/StoreProvider";
import Category from "./Category";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

/**
 * 
 * @returns Component that renders categories with their to-do items.
 */
const CategoryToDo = () => {
  const { state, dispatch } = useContext(Store);

  /**
   * Display all categories with to-dos from database.
   */
  useEffect(() => {
    let listOfCategories = fetchAllCategories().then((categories) => {
      let action = {
        type: "get-categories",
        payload: categories,
      };
      dispatch(action);
    });
  }, []);

  const fetchAllCategories = async () => {
    let response = await fetch(`http://localhost:8081/api/get/categories`);
    let data = await response.json();
    return data;
  };

  /**
   * Delete a category from the database.
   * @param {*} category
   */
  const removeCategory = async (categoryId) => {
    let response = await fetch(
      `http://localhost:8081/api/delete/category/${categoryId}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      dispatch({
        type: "delete-category",
        payload: categoryId,
      });
    }
  };

  /**
   * Delete a todo from the database.
   * @param {*} todo 
   */
  const removeTodo = async (todo) => {
    let response = await fetch(
      `http://localhost:8081/api/delete/todo/${todo.id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      dispatch({
        type: "delete-todo",
        payload: todo,
      });
    }
  };

  return (
    <div className="m-5 ">
      <h2 className="fw-bold ">
        {state.map((category, index) => (
          <div key={index} className="m-5 border border-dark border-3 rounded">
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
