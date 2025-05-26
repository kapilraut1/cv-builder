import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Intro } from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>The CV generator</h1>
    <p>The place where undergrad becomes professional</p>
      <Intro />
    
    </>
  )
}

export default App
