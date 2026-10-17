// Funcion de JS que retorna JSX(HTML dentro de JS) siempre empieza con mayúscula el nombre del componente
function Header() {
    // Lo que muestra en pantalla
    return (
        <h1 className="text-4xl font-extrabold text-gray-500 text-center">
            ¿Cuánto <span className="text-indigo-600">dinero </span> necesitas?
        </h1>
    )
}

// Se debe exportar para importarlo en otros archivos
export default Header;