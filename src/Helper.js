
//obtiene la diferencia de años
export function obtenerDiferenciaYear (year) {
    return new Date().getFullYear() - year;
}   

//calcula el total a pagar segun la marca
export function calcularMarca (marca) {
    let incremento;

    switch(marca ){
        case 'europe':
            incremento= 1.30;
                break;
        case 'americano':
        incremento= 1.15;
            break;
        case 'asiatico':
        incremento= 1.5
            break;

        default:
            break;
    }

    return incremento;
}

//calcula el tipo de seguro

export function obtenerPlan (plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}