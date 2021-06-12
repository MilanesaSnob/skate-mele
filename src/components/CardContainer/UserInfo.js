import React from 'react';

// creamos un componente de funcion para traernos el item con el destructuring
export default function UserInfo({name, course, photo}){

    return (
        <div>
            <img src={photo} alt="foto perfil" />
            <h4>{name}</h4>
            <h5>{course}</h5>
        </div>
    )
}



<div className="Card">
                    <p>{item.message}</p>
                    <UserInfo />
                </div>