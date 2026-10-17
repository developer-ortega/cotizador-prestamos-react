import { useState } from 'react'
import Header from './components/Header'

function App() {
  // Hook de React para guardar valores que pueden cambiar
  // cantidad -> el valor actual del state
  // setCantidad -> la funcion que cambia ese valor
  const [cantidad, setCantidad] = useState(10000);

  function handleChange(e) {

  }
  // input tipo barra deslizable para elegir la cantidad
  // onChange es un evento que se ejecutara al mover la barra
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header/>
        <input 
          type='range' 
          className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
          onChange={handleChange}
        />
    </div>
  )
}

export default App
