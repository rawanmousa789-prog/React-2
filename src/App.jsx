import { useState } from 'react'
import './App.css'

function App() {
  const [feild, setFeild] = useState("React.js")
  const [level, setLevel] = useState("senior")
  const [count, setCount] = useState(0)
  // const changeFeild = () => {
  //   
  // }
  
  return (
    <>
      <h1>My feild is {feild}</h1>
      <button onClick={()=> setFeild('Vite.js')}>change feild</button>
      <br/>
      <br/>
      <h1>Iam a {level}</h1>
      <button onClick={()=> setLevel('mid-level')}>change level</button>
      <br/>
      <br/>
      <button onClick={()=> setCount(count + 1)}>counter {count}</button>
    </>
  )
}

export default App
