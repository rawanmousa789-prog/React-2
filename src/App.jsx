import "./App.css";
import "./theme.css";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useReducer } from "react";

const initialData = {
  feild: "React ",
  level: "jenior",
  counter: 0,
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FEILD":
      return { ...state, feild: action.payload };
    case "CHANGE_LEVEL":
      return { ...state, level: action.payload };
    case "INCREASE_COUNTER":
      return { ...state, count: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${data.theme}`}>
      <h1>My feild is {data.feild}</h1>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_FEILD", payload: "Vue Js" });
        }}
      >
        change feild
      </button>
      <br />
      <br />
      <h1>Iam a {data.level}</h1>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_LEVEL", payload: "senior" });
        }}
      >
        change level
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "INCREASE_COUNTER", payload: data.count + 1 });
        }}
      >
        counter {data.count}
      </button>
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", payload: "light" });
          }}
          style={{ marginRight: "20px" }}
        >
          light
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", payload: "dark" });
          }}
          style={{ marginRight: "20px" }}
        >
          dark
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", payload: "pink" });
          }}
        >
          pink
        </button>
      </div>
      <div>
        <br />
        <br />
        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              payload: data.theme === "light" ? "dark" : "light",
            });
          }}
        >
          {data.theme === "light" ? <FaMoon /> : <IoSunnyOutline />}
        </button>
      </div>
    </div>
  );
}

export default App;
