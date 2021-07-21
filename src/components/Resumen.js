import React, {Fragment} from 'react'
import styled from '@emotion/styled';

const ContenedorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;



const Resumen = ({datos}) => {

    //extraer de datos
    const{marca, plan, year} = datos;

    if(marca === '' || plan === '' || year === ''  )
    return null;

    

    return ( 
        <ContenedorResumen>
            <h2>Resumen De Cotizacion</h2>
            <ul>
                <li> Marca: { marca} </li>
                <li> Plan: { plan}</li>
                <li> Año del auto: { year}</li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;