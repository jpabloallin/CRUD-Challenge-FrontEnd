function reducer(state, action) {
  switch (action.type) {
    case "get-categories":
        const stateWithAllTheCategories = [...state, ...action.payload]
            return stateWithAllTheCategories;   

    case "add-category":
        console.log("addingggg!!");

        const newCategory = action.payload;
        if(newCategory){
            const newState = [...state, newCategory]
            console.log(newState)
            return newState
        }
        return newState;

    case "delete-category":
        console.log("deleting!!");
        return state.filter((category)=> category.id !== action.payload.id)

    case "create-todo":
        const newTodo = [action.payload]

        console.log(newTodo)
        return newTodo;
    
    case "update-todo":
        const updateTodo = action.payload;
    
        console.log(updateTodo)
        return updateTodo

    case "update-todo-checkbox":
        const categoryUpdateTodo = state.find((category) =>category.id === action.payload.fkCategoryId)
        console.log('categoryUpdateTodo :>> ', categoryUpdateTodo);
        if(categoryUpdateTodo){
            const todoToUpdate = categoryUpdateTodo.todos.map((todo) => todo.id === action.payload.id ? {...action.payload}: todo)
            console.log('todotoupdate :>> ', state);
            const newState = state.map((category) => category.id === categoryUpdateTodo.id ? {...categoryUpdateTodo, todos:todoToUpdate}: category)
            console.log('newstate :>> ', state);
            return newState
        }        
        return state;

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