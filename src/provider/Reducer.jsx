function reducer(state, action) {
  switch (action.type) {
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
        console.log("creating todoooo!!");
        const newTodo = [action.payload]

        console.log(newTodo)

    case "update-todo":
        const categoryUpdateTodo = state.find((category) =>category.id === action.payload.todo.fkCategoryId)
            if(categoryUpdateTodo){
                const todoToUpdate = categoryUpdateTodo.todos.map((todo) => todo.id === action.payload.todo.id ? {...action.payload.todo}: todo)
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

    case "get-categories":
        const stateWithAllTheCategories = [...state, ...action.payload]
        console.log();
            return stateWithAllTheCategories;    
    }
    
}

export default reducer