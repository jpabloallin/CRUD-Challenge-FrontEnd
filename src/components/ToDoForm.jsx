import { useContext, useState } from "react";
import { Store } from "../provider/StoreProvider";

const ToDoForm = () => {
  const [todo, setTodo] = useState("");

  const onAdd = (event) => {
    event.preventDefault();
    if (todo) {
      dispatch({
        type: "add-todo",
        payload: {
          todo,
        },
      });
    }
  };

  const { state, dispatch } = useContext(Store);

  const addTodo = (event) => {
    const entryTodo = event.target.value;
    setTodo(entryTodo);
  };

  return (
    <form>
      <input onChange={addTodo} type="text" name="todo" placeholder="Todo" />
      <button onClick={onAdd}>Add a new todo!</button>
    </form>
  );
};

export default ToDoForm;
