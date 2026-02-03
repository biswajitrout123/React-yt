import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card.jsx'
import User from './components/User.jsx'

const App = () => {

  const arr = [10, 20, 30, 40];

  return (
    <div className='parent'>
      {/* <User name={arr[0]} />
      <User name={arr[1]} />
      <User name={arr[2]} /> */}

      {arr.map(function () {
        return 'hello'
      })}
    </div>
  )
}

export default App

