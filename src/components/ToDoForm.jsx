import { useContext, useState, useRef } from "react";
import { Store } from "../provider/StoreProvider";

const ToDoForm = ({categoryId}) => {
  const formRef = useRef(null);
  const [todo, setTodo] = useState("");

  const onAdd = (event) => {
    event.preventDefault();
    if (todo) {
      dispatch({
        type: "create-todo",
        name: todo,
        categoryId: categoryId
      });
      formRef.current.reset()
    }
  };

  const { state, dispatch } = useContext(Store);

  const addTodo = (event) => {
    const entryTodo = event.target.value;
    setTodo(entryTodo);
  };

  return (
    <form ref={formRef} className="form-control border border-5">
      <input onChange={addTodo} type="text" name="todo" placeholder="Todo" 
      className="form-control form-control-lg mt-3"/>
      <div className="d-grid gap-2 col-6 mx-auto m-3">
      <button onClick={onAdd} className="btn btn-success">Add a new todo!</button>
      </div>
    </form>
  );
};

export default ToDoForm;
