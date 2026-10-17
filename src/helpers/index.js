// Funciones ayudantes de JavaScript puro
// Utlizando una API nativa para dar formato al número el idioma y el país como en este caso, Estado Unidos
const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

// Calculo de la cantidad y plazo 
const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // Mientras mayor la cantidad solicitada, menor interes
    if (cantidad < 5000) {
        total = cantidad * 1.5;
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    } else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    // Plazo - más plazo, mayor interes
    if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }
    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}