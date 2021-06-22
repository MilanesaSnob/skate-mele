import React from 'react';



function Item({id, title, description, price, pictureUrl}){

    return (
        <div>
            <div className="CardInfo">
                <img src={pictureUrl} alt="foto producto"/>
                <span>{title}</span>
                <span>Código producto: {id}</span>
                <span>{description}</span>
                <span>Precio por unidad: {price} $</span>
            </div>

        </div>
    )
}

export default Item;
