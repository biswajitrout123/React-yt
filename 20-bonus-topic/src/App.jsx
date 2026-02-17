import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Parent from './components/Parent'

const App = () => {

  const [theme, setTheme] = useState('light')


  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar  theme={theme} setTheme={setTheme}/>
      <Parent />
    </div>
  )
}

export default App



