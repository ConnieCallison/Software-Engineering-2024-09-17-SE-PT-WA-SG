import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  BigCats from './components/BigCats'
import AddCatForm from './components/BigCats'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
     <BigCats></BigCats>
     <AddCatForm></AddCatForm>
      </div>
  )
}

export default App
