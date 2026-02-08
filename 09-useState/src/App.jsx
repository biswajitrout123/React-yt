import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(prev => prev + 1)
  }

  function decreasingNum() {
    setNum(prev => prev - 1)
  }

  function jump5Num() {
    setNum(prev => prev + 5)
  }

  return (
    <div className="container">
      <div className="card">
        <h1>{num}</h1>
        <div className="btns">
          <button onClick={increaseNum}>Increase</button>
          <button onClick={decreasingNum}>Decrease</button>
          <button onClick={jump5Num}>Increase by 5</button>
        </div>
      </div>
    </div>
  )
}

export default App