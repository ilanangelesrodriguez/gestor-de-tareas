/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef(): identificar valores, dentro de la vista
 * - useEffect(): controlar los cambios en la vista
 */

import React, {useState, useRef, useEffect} from 'react';

export const Ejemplo02 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef(), para asociar una variable
    //con un elemento del DOM del componente vista

    const miRef = useRef();
    
    function incrementar1() {
        setContador1(contador1+1);
    }
    function incrementar2() {
        setContador2(contador2+1);
    }

    /**
     * Trabajando con el useEffect
     */
    useEffect()
    
    return (
        <div>

        </div>
    );
};
//fsc
