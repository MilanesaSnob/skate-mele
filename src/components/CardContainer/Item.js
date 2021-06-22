import React from 'react';

const styles = {
    img: {
        borderRadius: '50%',
        width: '50px'
        
    }
}

// creamos un componente de funcion para traernos el item con el destructuring
function Item({name, course, photo}){

    return (
        <div>
            <img src={photo} alt="foto perfil" style={styles.img}/>
            <div className="CardInfo">
                <span>{name}</span>
                <span>{course}</span>
            </div>

        </div>
    )
}

export default Item;
