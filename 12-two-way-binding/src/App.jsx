import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler =(e) => {
    e.preventDefault()
    console.log('Form was Submitted!', title);     //title store the input in the box

    // IT REFRESH THE PAGE AND CLEAN THE INPUT BOX:
    setTitle('')
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter Your Name!' 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          // console.log(e.target.value);
          
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App








