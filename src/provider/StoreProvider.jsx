/**
 * Store Provider that has a schema and inital state with default data
 */
import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = [
    
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
