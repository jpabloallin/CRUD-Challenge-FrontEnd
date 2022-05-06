function reducer(state, action) {
  switch (action.type) {
    case "add-category":
        console.log("addingggg!!");
        return state;

    case "delete-category":
        console.log("deleting!!");
        const newCategories = state.listOfCategories.filter(category => category.id !== action.payload.id)
        console.log(newCategories)
        const CategoryDeleted = {...state, listOfCategories: newCategories}
        return CategoryDeleted

    case "create-todo":
        console.log("creating todoooo!!");
        return state;

    case "update-todo":
        return state;

    case "delete-todo":
        return state;
  }
}

export default reducer