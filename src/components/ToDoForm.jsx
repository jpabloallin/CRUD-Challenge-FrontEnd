import { useContext, useState, useRef } from "react";
import { Store } from "../provider/StoreProvider";

const ToDoForm = ({categoryId}) => {
  const formRef = useRef(null);
  const [todo, setTodo] = useState("");
  const [name, setName] = useState("");

  /**
   * Creates a new todo within a category.
   * @param {*} event 
   */
  const onAdd = async(event)=>{
    event.preventDefault()
    if(name){

      const todoFromForm = {
        name,
        completed: false,
        fkCategoryId: categoryId  
      }

      let todoSavedPromise = await fetch(`http://localhost:8081/api/create/todo`, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(todoFromForm)
        })

        let todoSaved = await todoSavedPromise.json();

        dispatch({
            type: "create-todo",
            payload: todoSaved
        });
      formRef.current.reset()
    }
    setTodo("")
    
  }

  const { state, dispatch } = useContext(Store);

  const addTodo = (event) => {
    const entryTodo = event.target.value;
    setName(entryTodo);
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
