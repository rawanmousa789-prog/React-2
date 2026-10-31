import "./App.css";
import "./theme.css";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
// import { useReducer } from "react";
import { Link } from "react-router-dom";
import {useContext} from "react";
import Data from "./context/data";


function App() {
  // const [data, dispatch] = useReducer(reducer, initialData);
  const {feild , changeField ,level , changeLevel , count , changeCounter , theme, changeTheme} = useContext(Data);

  return (
    <div className={`App ${theme}`}>
      <h1>My feild is {feild}</h1>
      <button onClick={() => {changeField()}}>
        change feild
      </button>
      <br />
      <br />
      <h1>Iam a {level}</h1>
      <button
        onClick={() => {changeLevel()
        }}
      >
        change level
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          changeCounter(); }}>
        counter {count}
      </button>
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            changeTheme('light');
          }}
          style={{ marginRight: "20px" }}
        >
          light
        </button>

        <button
          onClick={() => {
            changeTheme('dark');
          }}
          style={{ marginRight: "20px" }}
        >
          dark
        </button>

        <button
          onClick={() => {
            changeTheme('pink');
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
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? <FaMoon /> : <IoSunnyOutline />}
        </button>
      </div>
      <br />
      <button><Link to="/home">Go to Home</Link></button>
    </div>
  );
}

export default App;
