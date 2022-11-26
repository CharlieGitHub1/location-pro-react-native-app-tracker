import React, { useReducer } from "react";

export default (reducer, action, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const resolvedActions = {};

    for (let key in action) {
      resolvedActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...resolvedActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
