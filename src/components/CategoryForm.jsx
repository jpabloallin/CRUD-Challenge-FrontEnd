import { useContext, useState, useRef } from "react"
import { Store } from "../provider/StoreProvider";

const CategoryForm = () => {

  const formRef = useRef(null)
  const [category, setCategory] = useState('')

  const {state, dispatch} = useContext(Store)

  const onAdd = (event)=>{
    event.preventDefault()
    if(category){
      dispatch({
        type: 'add-category',
        title: category
      })
      formRef.current.reset()
    }
  }

  const addCategory = (event) =>{
    const entryCategory = event.target.value
    setCategory(entryCategory)
  }

  return (
   <form ref={formRef} className="form-control border border-5">
     <input onChange={addCategory} type="text" name="category" placeholder="Category" 
     className="form-control form-control-lg mt-3 "/>
     <div className="d-grid gap-2 col-6 mx-auto m-3">
      <button onClick={onAdd} className="btn btn-success">New Category</button>
     </div>
     
   </form>
  )
}

export default CategoryForm