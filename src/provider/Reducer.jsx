function reducer(state, action) {
  switch (action.type) {
    case "add-category":
        console.log("addingggg!!");

        const newCategory = {
            id: Math.floor(Math.random()*100),
            title: action.title,
            todos: []
        }            
        if(newCategory){
            const newState = [...state, newCategory]
            console.log(newState)
            return newState
        }

    case "delete-category":
        console.log("deleting!!");
        return state.filter((category)=> category.id !== action.payload.id)

    case "create-todo":
        console.log("creating todoooo!!");
        return state;

    case "update-todo":
        const categoryUpdateTodo = state.find((category) =>category.id === action.payload.fkCategoryId)
            if(categoryUpdateTodo){
                const todoToUpdate = categoryUpdateTodo.todos.map((todo) => todo.id === action.payload.id ? {...todo, name:action.newTitle}: todo)
                const newState = state.map((category) => category.id === categoryUpdateTodo.id ? {...categoryUpdateTodo, todos:todoToUpdate}: category)
                return newState
            }        

    case "delete-todo":
        const categoryTodo = state.find((category)=> category.id === action.payload.fkCategoryId)
        if(categoryTodo){
            const TodoToDelete = categoryTodo.todos.filter((todo) => todo.id !== action.payload.id)
            const newState = state.map((category)=> category.id === categoryTodo.id ? {...categoryTodo, todos:TodoToDelete} : category)
            return newState
        }
    }
}

export default reducer