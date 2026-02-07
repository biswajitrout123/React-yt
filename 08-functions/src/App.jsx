import React from 'react'

const App = () => {

  function inputChanging() {
    console.log('User is Typing');
    
  }
  return (
    <div>
      <div>
        <input onChange={inputChanging} type="text" placeholder='Enter Name' />
      </div>
    </div>
  )
}

export default App


