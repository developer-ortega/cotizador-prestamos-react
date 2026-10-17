// Funciones ayudantes de JavaScript puro
// Utlizando una API nativa para dar formato al número el idioma y el país como en este caso, Estado Unidos
const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

export {
    formatearDinero
}