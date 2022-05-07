function reducer(state, action) {
  switch (action.type) {
    case "get-categories":
        const stateWithAllTheCategories = [...state, ...action.payload]
            return stateWithAllTheCategories;   

    case "add-category":
        const newCategory = action.payload;
        if(newCategory){
            const newState = [...state, newCategory]
            return newState
        }
        return newState;

    case "delete-category":
        const deleteCategory = state.filter((category)=> category.id !== action.payload.id)
        return deleteCategory
        
    case "create-todo":
        const newTodo = [action.payload]
        return newTodo
    
    case "update-todo":
        const updateTodo = action.payload;
        return updateTodo

    case "update-todo-checkbox":
        const categoryUpdateTodo = state.find((category) =>category.id === action.payload.fkCategoryId)
        if(categoryUpdateTodo){
            const todoToUpdate = categoryUpdateTodo.todos.map((todo) => todo.id === action.payload.id ? {...action.payload}: todo)
            const newState = state.map((category) => category.id === categoryUpdateTodo.id ? {...categoryUpdateTodo, todos:todoToUpdate}: category)
            return newState
        }        
        return newState;

    case "delete-todo":
        const categoryTodo = state.find((category)=> category.id === action.payload.fkCategoryId)
        if(categoryTodo){
            const TodoToDelete = categoryTodo.todos.filter((todo) => todo.id !== action.payload.id)
            const newState = state.map((category)=> category.id === categoryTodo.id ? {...categoryTodo, todos:TodoToDelete} : category)
            return newState
        }
        return newState;
    }
}

export default reducer