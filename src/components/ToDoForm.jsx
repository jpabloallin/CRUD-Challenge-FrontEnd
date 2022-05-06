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
    <form ref={formRef}>
      <input onChange={addTodo} type="text" name="todo" placeholder="Todo" />
      <button onClick={onAdd}>Add a new todo!</button>
    </form>
  );
};

export default ToDoForm;
