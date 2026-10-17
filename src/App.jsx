import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button';
import { formatearDinero } from './helpers';

function App() {
  // Hook de React para guardar valores que pueden cambiar
  // cantidad -> el valor actual del state
  // setCantidad -> la funcion que cambia ese valor
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);

  // Variables normales - STEP = Saltos en 100 - MIN = Mínimo en 0 - MAX = Cantidad máxima de 20000
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // Se ejecuta cada vez que se mueve la barra, tipo número con + la cantidad
  function handleChange(e) {
    setCantidad(+e.target.value)
  }

  // Resta a la cantidad sin bajar del MIN
  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert('Cantidad no válida')
      return;
    }

    setCantidad(valor);
  }

  // Suma a la cantidad sin sobrepasar del MAX
  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert('Cantidad no permitida')
      return;
    }

    setCantidad(valor);
  }

  // input tipo barra deslizable para elegir la cantidad
  // onChange es un evento que se ejecutara al mover la barra
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

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

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de pagos</span>
        </h2>
        <p className='text-xl text-gray-500 text-center font-bold'>{meses} meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>Total a pagar</p>
        <p className='text-xl text-gray-500 text-center font-bold'>Mensuales</p>
      </div>

    </div>
  )
}

export default App
