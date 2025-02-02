import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import calculator from './components/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Calculator App</h2>
      </div>

      <div>
        <Calculator></Calculator>
      </div>

    </>
  )
}

export default App
