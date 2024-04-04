import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [ name, setName ] = useState('')
  const [ telephone, setTelephone ] = useState('')

  useEffect(() => {
    /* console.log('Name:', name) */
  }, [name])

  useEffect(() => {
    /* console.log('Telephone:', telephone) */
  }, [telephone])

  const showData = () => {
    console.log('Name:', name)
    console.log('Telephone:', telephone)
  }

  return (
    <>
      <div className="app">
        <div className="data">

          <label>Name: 
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br/>

          <label>Telephone:
            <input 
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
          
          <button
            onClick={showData}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default App
