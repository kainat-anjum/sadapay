import React, { useReducer, useMemo, createContext } from "react";
import { initialState } from "../meta";
import { reducer } from "../reducers/reducers";

export const AppContext = createContext({
  state: { ...initialState },
  dispatch: () => undefined,
});

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
