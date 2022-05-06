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
   <form ref={formRef}>
     <input onChange={addCategory} type="text" name="category" placeholder="Category"/>
     <button onClick={onAdd}>New Category</button>
   </form>
  )
}

export default CategoryForm