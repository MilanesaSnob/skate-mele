import React, { useState, useEffect} from 'react';
import Card from './Card.js';
import './CardContainer.css';

//Creamos un array de objetos que va a contener a nuestros objetos
const referensData = [
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        user: {
            name: 'Juan Alberto',
            course: 'ui/ux',
            photo: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        user: {
            name: 'Martin Mele',
            course: 'React',
            photo: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        user: {
            name: 'Pedro M.',
            course: 'Diseño Web',
            photo: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        user: {
            name: 'Pedro M.',
            course: 'Diseño Web',
            photo: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        user: {
            name: 'Pedro M.',
            course: 'Diseño Web',
            photo: 'https://picsum.photos/id/237/200/300'
        }
    },
]

function CardContainerHooks() {
    // debo declarar un useState por cafa propiedad que tenga
    const [referens, seteoReferencias] = useState(referensData);
    const [contador, seteoContador] = useState(0);

    /* Defino el método para agregar cards */ 
    const addNewCard = () => {
        /* Creo la nueva referencia que se va a agregar*/
        const newReference = {
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                user: {
                    name: 'Diego Armando',
                    course: 'Magia',
                    photo: 'https://picsum.photos/id/237/200/300'
                }
        }
        /* Le digo que me liste las referencias y me agregue la que acabo de crear */
        seteoReferencias([...referens, newReference])
    }

    /* Defino un nuevo metodo de la clase para pasar por props*/
    const buttonFunction = () => {
        alert('Funcion del padre CardContainer enviada mediante props a su hijo Card')
    }

    /* A diferencia de las clases utilizamos useEffect para los ciclos de vida */
    useEffect(() => { console.log('esto es un component DidMount')}, [])  //No le paso nada en el array[] asi que no se renderiza 
    useEffect(() => { console.log('esto es un component DidUpdate')}, [referens])  // Le paso la data y me actualiza

    return(
        <div className="Card-container">
            {referens.map((item) => 
                <Card {...item} buttonFunction={buttonFunction}/>)}

            <button onClick={addNewCard} style={{position:'fixed', top:'10vh', left:'0'}}>Agregar Card</button>    
        </div>
    )
}

export default CardContainerHooks