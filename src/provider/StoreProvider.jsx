import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  category: {
    id: "",
    title: "",
    todos: [
      {
        id: "",
        name: "",
        completed: false,
        fkCategoryId: "",
      },
    ],
  },
  listOfCategories: [
    {
      id: "0",
      title: "Category by default",
      todos: [
        {
          id: "0",
          name: "to-do by default",
          completed: false,
          fkCategoryId: "0",
        },
      ],
    },
    {
        id: "1",
        title: "Category by default1",
        todos: [
          {
            id: "1",
            name: "to-do by default1",
            completed: false,
            fkCategoryId: "1",
          },
          {
            id: "2",
            name: "to-do by default2",
            completed: false,
            fkCategoryId: "1",
          },
        ],
      },
  ],
};

const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>
  );
};

export default StoreProvider;

export { Store, initialState };
