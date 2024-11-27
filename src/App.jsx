import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import Lista from './components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container text-center'>
        <div className='row mt-3'>
          {/** */}
          <Formulario />
          {/** */}
          <Lista />
        </div>
      </div>
    </>
  )
}

export default App
