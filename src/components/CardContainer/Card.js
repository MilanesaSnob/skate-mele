import React from 'react';
import UserInfo from './UserInfo';
import './CardContainer.css';

function Card({message, user}){
    return(
        <div className="CardStyle">
            <p>{message}</p>
            <UserInfo {...user}/>
        </div>
    )
}

export default Card;