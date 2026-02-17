import React from 'react'

const Child = ({sendName}) => {

    const change = () => {
        sendName('Biswajit')
    }

    
  return (
    <div>
        
      <button onClick={change}>Change Name</button>
    </div>
  )
}

export default Child
