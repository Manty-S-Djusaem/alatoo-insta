import { useState } from 'react'
import Main from './Main/Main.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Main />
   </div>
  )
}

export default App
