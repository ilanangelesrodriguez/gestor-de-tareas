/**
 * Ejemplos de hooks
 * -useState()
 * -useContext()
 */

import React, {useState, useContext} from 'react';

const miContexto = React.createContext(null);

/**
 *
 * @returns {Componente01}
 * dispone de un contexto que va a tener un valor que recibe desde el padre
 * @constructor
 */

const Componente01 = () => {

    /**
     * Inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre
     * @type {React.Context<null>}
     */
    const state = useContext(miContexto)

    return (
        <div>
            <p>
                El token es: {state.token}
            </p>
            {/* pintamos el componente 2 */}
            <Componente02/>

        </div>
    );
};

const Componente02 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <p>
                La sesion es: {state.sesion}
            </p>
        </div>
    );
};


export const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSessionData() {
            setSessionData({
            token: "Ilan123",
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData} >
            {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
            {/* Todo lo que este aqui dentro puede actualizar los datos de sessionData */}
            <h1>**** Ejemplo de useState() y useContext() ****</h1>
            <Componente01/>
            <button onClick={actualizarSessionData}>Actualizar sessionData</button>
        </miContexto.Provider>
    );
};
