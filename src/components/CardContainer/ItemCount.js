import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';


/* Funcion flecha*/
// Tengo que renombrar stock: initialStock en las props para después utilizar el método stock en la lógica
const ItemCount = ({stock: initialStock, initial, onAdd}) => {
    /*Hago el contador*/
    const [contador, setContador] = useState(initial);
    /*Almaceno el stock para poder compararlo con el contador y evitar comprar mas de lo que hay*/
    const [stock, setStock] = useState(initialStock);

    const addContador = () => {
        if (contador >= 0 && contador < stock) {
            setContador(contador + 1)
        }
        else {
            alert('se acabó lo que se daba')
        }

    }

    return(
        <div>
            <div className="CardCount">
                <button onClick={() => {contador > 0 && setContador(contador - 1)}}> - </button>
                <span>{contador}</span>
                <button onClick={addContador}> + </button>
            </div>
            <div className="CardAdd">
                <button onClick={onAdd}>Agregar</button>
            </div>
        </div>    
    )

}

export default ItemCount


/* Funcion clásica
function ItemCount({initial, stock, onAdd}){
    
    const [contador, setContador] = useState(initial);


    return(
        <div>
            <button onClick={() => {contador > 0 && setContador(contador - 1)}}> - </button>
            <span>{contador}</span>
            <button onClick={() => {stock > 0 && setContador(contador + 1)}}> + </button>
            
            <button onClick={onAdd}>Agregar</button>
        </div>
    )

}

*/