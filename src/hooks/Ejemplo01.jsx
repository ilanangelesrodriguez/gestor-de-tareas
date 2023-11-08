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
    function incrementarContador() {
        // funcionParaCambiar(nuevoValor)
        setContador(contador+1);
    }

    /**
     * Funcion para actualizar el estado de persona
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: "Jesús",
                email: "jesus@gmail.com"
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de UseState() ***</h1>
            <p>Contador: {contador}</p>
            <p><b>Datos de la persona:</b></p>
            <p>Nombre: {persona.nombre}</p>
            <p>Email: {persona.email}</p>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>

        </div>
    );
}

export default Ejemplo01;

