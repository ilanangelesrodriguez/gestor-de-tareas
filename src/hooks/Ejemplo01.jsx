/**
 * Ejemplo de uso, del Hook Usestate
 * 
 * Crear componente de tipo funcion y acceder a su estado privado a traves de un hook y poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo01 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una person
    const personaInicial = {
        nombre: "Ilan",
        email: "ilan@correo.pe"
    }

    /**
     * Queremos que el valor inicial y persona inicial, sean parte del estado del componente para asi 
     * gestionar su cambio y que este se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState{valorInicial}
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // 16:27
    
    return (
        <div>
            
        </div>
    );
}

export default Ejemplo01;

