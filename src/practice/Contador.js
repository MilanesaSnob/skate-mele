import React from 'react';

//Componente de Función bruto stateless, sólo lo utilizo para recibir propiedades y pintarlas, en este caso el contador de CardWithClass
//Este es un hijo de CardWithClass
//los props son para pasarle propiedades a los hijos, o sea, información a un componente. Aca se los pasamos con Destructuring para que quede mas limpio el codigo
export default function Contador({empresa, contadorNumero}){

    return (
        <div>
            <h3>{empresa}</h3>
            <h3>{contadorNumero + ' hijo'}</h3>
        </div>
    )
}
