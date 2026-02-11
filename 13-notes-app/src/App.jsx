import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()


    // console.log(title,details);
    const copyTask = [...task];

    copyTask.push({title, details})
    
    setTask(copyTask)
    

    setTitle('')

    setDetails('')

  }



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input type="text" placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}

          onChange={(e) => {
            setTitle(e.target.value)

          }}
        />

        {/* DETAILED WALA INPUT */}
        <textarea type="text" placeholder='Write Details'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium outline-none w-full text-black px-5 py-2 rounded'
          >
          Add Noes
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem, idx) {

            return <div key={idx} className='h-52 w-40  text-black p-4 rounded-xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>

            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App





