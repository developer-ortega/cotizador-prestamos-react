import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button';
import { formatearDinero } from './helpers';
 
function App() {
  // Hook de React para guardar valores que pueden cambiar
  // cantidad -> el valor actual del state
  // setCantidad -> la funcion que cambia ese valor
  const [cantidad, setCantidad] = useState(10000);

  // Variables normales - STEP = Saltos en 100 - MIN = Mínimo en 0 - MAX = Cantidad máxima de 20000
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // Se ejecuta cada vez que se mueve la barra, tipo número con + la cantidad
  function handleChange(e) {
      setCantidad(+e.target.value)
  }

  // Resta a la cantidad sin bajar del MIN
  function handleClickDecremento(){
    const valor = cantidad - STEP;

    if(valor < MIN){
      alert('Cantidad no válida')
      return;
    }

    setCantidad(valor);
  }

  // Suma a la cantidad sin sobrepasar del MAX
  function handleClickIncremento(){
    const valor = cantidad + STEP;

    if(valor > MAX){
      alert('Cantidad no permitida')
      return;
    }

    setCantidad(valor);
  }

  // input tipo barra deslizable para elegir la cantidad
  // onChange es un evento que se ejecutara al mover la barra
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header/>

        <div className='flex justify-between my-6'>
          <Button
            operador='-'
            fn={handleClickDecremento}
          />
          <Button
            operador='+'
            fn={handleClickIncremento}
          />
        </div>

        <input 
          type='range' 
          className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
          onChange={handleChange}
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />
        
        <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
          {formatearDinero(cantidad)}
          </p>
    </div>
  )
}

export default App
