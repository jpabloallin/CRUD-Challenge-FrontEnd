import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = [
    {
      id: "0",
      title: "Category by default 0",
      todos: [
        {
          id: "0",
          name: "Title by default 0",
          done: false,
          fkCategoryId: "0",
        },
      ],
    },
    {
      id: "1",
      title: "Category by default 1",
      todos: [
        {
          id: "1",
          name: "Title by default 1",
          done: false,
          fkCategoryId: "1",
        },
        {
          id: "2",
          name: "Title by default 2",
          done: false,
          fkCategoryId: "1",
        },
      ],
    },
  ];

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
