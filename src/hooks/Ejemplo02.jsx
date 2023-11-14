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
    /**
     * ? caso 01: Ejecutar siempre Snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect
     */

    /* useEffect(() => {
        console.log("Cambio en el estado del componente");
        console.log("Mostrando referencia al elemento del DOM");
        console.log(miRef);
    }, []); */

    /**
     * ? caso 02: Ejecutar solo cuando cambie contador1
     * cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect
     * en cado de que cambie contador2, no se ejecuta nada
     */

    /* useEffect(() => {
        console.log("Cambio en el estado del contador1");
        console.log("Mostrando referencia al elemento del DOM");
        console.log(miRef);
    }, [contador1]); */

    /**
     * ? caso 02: Ejecutar solo cuando cambie contador1 o contador2
     * cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect()
     * cada vez que haya un cambio en el contador2, se ejecuta lo que diga el useEffect()
     */
    useEffect(() => {
        console.log("Cambio en el estado del contador1 / contador2");
        console.log("Mostrando referencia al elemento del DOM");
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de UseState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <p ref={miRef}>
                Elemento referenciado
            </p>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    );
};
//fsc
