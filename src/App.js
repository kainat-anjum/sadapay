import './App.css';
import React, {useReducer, useMemo} from 'react';
import { reducer } from "./reducers/reducers";
import {List} from './components';
import { AppContext } from "./context/AppContext";
import { initialState } from "./meta";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <div className="App">
      <AppContext.Provider value={value}>
      <List/>
      </AppContext.Provider>
    </div>
  );
}

export default App;


