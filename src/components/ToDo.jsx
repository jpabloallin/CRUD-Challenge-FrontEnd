import React, { useContext, useState } from "react";
import { Store } from "../provider/StoreProvider";
import EditTodo from "./EditTodo";

const ToDo = ({ todo, removeTodo }) => {
  const { state, dispatch } = useContext(Store);

  const [showEdit, setShowEdit] = useState(false);

  const onChecked = async (event, todo) => {
    const newTodo = { ...todo, completed: !todo.completed };
    console.log(newTodo);
    let response = await fetch(`http://localhost:8081/api/update/todo`,
    {                                                     
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newTodo)
    })

    console.log(response);    

    let todoUpdated = await response.json()
    console.log(todoUpdated)
    dispatch({
      type: 'update-todo',
      payload:todoUpdated      
    })
  };

  const updateTodo = (todo, todoName) => {
    const newTodo = { ...todo, name: todoName };
    console.log(newTodo);
    dispatch({
      type: "update-todo",
      payload: {
        todo: newTodo,
      },
    });
  };

  const showEditInput = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="border border-dark m-3 rounded border-2 d-flex justify-content-evenly">
      <h5
        className="fw-bold m-2"
        style={todo.completed ? { textDecoration: "line-through" } : {}}
      >{`${todo.name}`}</h5>
      <div className="d-flex">
        {" "}
        <button
          onClick={() => removeTodo(todo)}
          className="btn btn-danger me-2 m-1"
        >
          Remove Todo
        </button>
        <button onClick={showEditInput} className="btn btn-warning me-2 m-1">
          Edit
        </button>
        {showEdit && <EditTodo updateTodo={updateTodo} todo={todo} />}
        <div className="d-flex align-items-center">
          <label className="form-check-label fs-6">Done</label>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(event) => onChecked(event, todo)}
            checked={todo.completed}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
