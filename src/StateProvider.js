import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext(); //usecontext =>global states.

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider> //provide to wrap all the components to have access to the context.
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);