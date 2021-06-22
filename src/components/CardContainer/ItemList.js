import React from 'react';
import Item from './Item';
import ItemListCont from './ItemListCont';
import './ItemListContainer.css';

function ItemList({producto}){
    return(
        <div className="CardStyle">
            <Item {...producto}/>
            <ItemListCont/>
        </div>
    )
}

export default ItemList;