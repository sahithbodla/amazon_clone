import React, {createContext, useContext, useReducer} from 'react'

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and makes Data Layer accessible to each and every component in our app
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);