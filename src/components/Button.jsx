// Props son datos que el componente padre le pasa al hijo en este caso, el operador y fn reciben desde el App.jsx el valor
function Button({operador, fn}) {
    return (
        <button
            type='button'
            className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
            onClick={fn}
        >{operador}</button>
    )
}

export default Button