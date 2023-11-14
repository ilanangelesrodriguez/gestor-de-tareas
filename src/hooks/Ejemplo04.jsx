/**
 * Ejemplo para entender el uso de props.children
 */

import * as React from 'react';

export const Ejemplo04 = (props) => {
    return (
        <div>
            <h3>*** Ejemplo de children props ***</h3>
            <p>
                Nombre: {props.nombre}
            </p>
            {/* props.children pintara por defecto aquello que se encuentre entre las
             etiquetas de apertura y cierre de este componente desde el componente de
             orden superior */}
            { props.children }

        </div>
    );
};