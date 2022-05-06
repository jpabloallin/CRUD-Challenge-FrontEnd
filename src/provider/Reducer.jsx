function reducer(state, action) {
  switch (action.type) {
    case "add-category":
      return state;

    case "delete-category":
        const newCategories = state.listOfCategories.filter(category => category.id !== action.payload.id)
        console.log(newCategories)
        const CategoryDeleted = {...state, listOfCategories: newCategories}
        return CategoryDeleted

    case "create-todo":
      return state;

    case "update-todo":
      return state;

    case "delete-todo":
      return state;
  }
}

export default reducer