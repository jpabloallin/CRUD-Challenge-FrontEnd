import { useContext, useState, useRef } from "react";
import { Store } from "../provider/StoreProvider";
/**
 * Category component that renders Category form and it has a fetch to create a new category.
 * @returns 
 */
const CategoryForm = () => {
  const formRef = useRef(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const { state, dispatch } = useContext(Store);

  /**
   * Creates new category on the database
   * @param {*Event that creates a new category} event 
   */
  const onAdd = async (event) => {
    event.preventDefault();
    if (title) {
      const categoriesFromForm = {
        title,
        todos: [],
      };

      let categorySavedPromise = await fetch(`http://localhost:8081/api/create/category`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoriesFromForm),
        }
      );

      let categorySaved = await categorySavedPromise.json();

      dispatch({
        type: "add-category",
        payload: categorySaved,
      });
      formRef.current.reset();
    }
    setCategory("");
  };

  /**
   * 
   * @param {*Events that adds name to category that was created} e 
   */
  const addingTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form ref={formRef} className="form-control border border-5">
      <input
        onChange={addingTitle}
        type="text"
        name="category"
        placeholder="Category"
        className="form-control form-control-lg mt-3 "
      />
      <div className="d-grid gap-2 col-6 mx-auto m-3">
        <button onClick={onAdd} className="btn btn-success">
          New Category
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
