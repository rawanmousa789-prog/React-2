import { createContext, useReducer } from "react";
const Data = createContext();

const initialData = {
  feild: "React ",
  level: "jenior",
  count: 0,
  theme: "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FEILD":
      return { ...state, feild: action.payload };
    case "CHANGE_LEVEL":
      return { ...state, level: action.payload };
    case "CHANGE_COUNTER":
      return { ...state, count: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeField = () => {
    dispatch({ type: "CHANGE_FEILD", payload: "Angular" });
  };
  const changeLevel = () => {
    dispatch({ type: "CHANGE_LEVEL", payload: "Senior" });
  };
  const changeCounter = () => {
    dispatch({ type: "CHANGE_COUNTER", payload: firstState.count + 1 });
  };
  const changeTheme = (newTheme) => {
    dispatch({type: "CHANGE_THEME", payload: newTheme });
  };

  return (
    <Data.Provider
      value={{ ...firstState, changeField, changeLevel, changeCounter,changeTheme }}
    >
      {children}
    </Data.Provider>
  );
}
export default Data;
