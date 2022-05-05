function reducer(state, action) {
  switch (action.type) {
    case "get-categories":
      return state;
    case "create-category":
      return state;
    case "create-todo":
      return state;
    case "update-todo":
      return state;
    case "delete-category":
      return state;
    case "delete-todo":
      return state;
  }
}

export default reducer