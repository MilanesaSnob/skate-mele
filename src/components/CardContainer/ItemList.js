import React from 'react';
import Item from './Item';
//import './CardContainer.css';

function ItemList({message, user, buttonFunction}){
    return(
        <div className="CardStyle">
            <p>{message}</p>
            <Item {...user}/>
            <button onClick={buttonFunction} >Recibo mi función</button>
        </div>
    )
}

export default ItemList;