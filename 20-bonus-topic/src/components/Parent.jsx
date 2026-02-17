import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [changeName, setChangeName] = useState('')

    const receiveData = (name) => {
        setChangeName(name)
    }


  return (
    <div>
      <h1>Hey I am {changeName}</h1>
      <Child sendName={receiveData}/>
    </div>
  )
}

export default Parent
