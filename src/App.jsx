import { useState } from 'react'
import Header from './components/Header'

function App() {
  // Hook de React para guardar valores que pueden cambiar
  // cantidad -> el valor actual del state
  // setCantidad -> la funcion que cambia ese valor
  const [cantidad, setCantidad] = useState(10000);

  // Variables normales - STEP = Saltos en 100 - MIN = Mínimo en 0 - MAX = Cantidad máxima de 20000
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
      setCantidad(+e.target.value)
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
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />
        
        <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
    </div>
  )
}

export default App
