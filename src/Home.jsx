import { useContext } from "react";
import Data from "./context/data";
import { Link } from "react-router-dom";

export default function Home() {
  const { feild , theme } = useContext(Data);
  return (
    <div className={`App ${theme}`}>
      
      <h1>Welcome to the Home Page</h1>
      <h1>My field is {feild}</h1>
      <br />
      <button><Link to="/">Back</Link></button>
    </div>
  )
}
