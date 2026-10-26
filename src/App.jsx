import { useState } from 'react'
import './App.css'

function App() {
  const [feild, setFeild] = useState("React.js")
  const changeFeild = () => {
    setFeild('Vite.js')
  }
  
  return (
    <>
      <h1>My feild is {feild}</h1>
      <button onClick={changeFeild}>change feild</button>
    </>
  )
}

export default App
