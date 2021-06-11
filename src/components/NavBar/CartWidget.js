import React from 'react';
import icon from '../../assets/shopping_cart.svg';

// creamos un componente de funcion para renderizar el icono
export default function CartWidget(){

    return (
        <div className="Icon-widget">
            <img src={icon} className="Icon-Cart" alt="Icon Cart" />
        </div>
    )
}
