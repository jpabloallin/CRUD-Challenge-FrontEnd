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
                fkCategoryId: ""
            }
        ]
    },
    listOfCategories: [
        {
            id: '0',
            title: "Category by default",
            todos: [
                {
                    id: "1",
                    name: "to-do by default",
                    completed: false,
                    fkCategoryId: "0",
                }
            ]
        }  
    ],
    todos: [
        {
            id: "1",
            name: "to-do by default",
            completed: false,
            fkCategoryId: "0",
        }
    ]
};


  const Store = createContext(initialState);

  const StoreProvider = ({ children }) => {
  
      const [state, dispatch] =useReducer(reducer, initialState)
  
      return (
          <Store.Provider value={{ state, dispatch }}>
              {children}
          </Store.Provider>
      );
  };
  
  export default StoreProvider;
  
  export {Store, initialState}