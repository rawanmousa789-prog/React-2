import { useState } from 'react'
import './App.css'
import './theme.css'
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";



function App() {
  const [feild, setFeild] = useState("React.js")
  const [level, setLevel] = useState("senior")
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  // const changeFeild = () => {
  //   
  // }
  
  return (
    <div className={`App ${theme}`}>
      <h1>My feild is {feild}</h1>
      <button onClick={()=> setFeild('Vite.js')}>change feild</button>
      <br/>
      <br/>
      <h1>Iam a {level}</h1>
      <button onClick={()=> setLevel('mid-level')}>change level</button>
      <br/>
      <br/>
      <button onClick={()=> setCount(count + 1)}>counter {count}</button>
      <br/>
      <br/>
      <div>
        <button onClick={()=> setTheme('light')}
        style={{marginRight: '20px'}}>light</button>
        
        <button onClick={()=> setTheme('dark')} 
        style={{marginRight: '20px'}}>dark</button>
        
        <button onClick={()=> setTheme('pink')}
          >pink</button>
      </div>
      <div>
        <br/>
        <br/>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
          
          {theme === 'light' ? <FaMoon /> : <IoSunnyOutline/>}
          </button>
      </div>
    </div>
  )
}

export default App
