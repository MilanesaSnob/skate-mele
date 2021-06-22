import React from 'react';
import Item from './Item';
import './ItemListContainer.css';

function ItemList({message, user, buttonFunction}){
    return(
        <div className="CardStyle">
            <p>{message}</p>
            <Item {...user}/>
        </div>
    )
}

export default ItemList;