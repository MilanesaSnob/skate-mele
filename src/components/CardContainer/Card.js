import React from 'react';
import UserInfo from './UserInfo';
import './CardContainer.css';

function Card({message, user, buttonFunction}){
    return(
        <div className="CardStyle">
            <p>{message}</p>
            <UserInfo {...user}/>
            <button onClick={buttonFunction} >Recibo mi función</button>
        </div>
    )
}

export default Card;