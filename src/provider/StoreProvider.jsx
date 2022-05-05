import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
    category: {
        id: "",
        title: "",
        done: false,
        fkCategoryId: ""
      },
      listOfCategories: [
        {
            id: 0,
            name: "Category by default",
            todos: [
                {
                    id: "0",
                    title: "to-do by default",
                    done: false,
                    fkCategoryId: "0",
                }
            ]
        }  
      ],
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