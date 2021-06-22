import { reject, resolve } from 'q';
import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

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

function ItemListContainer() {
    // debo declarar un useState por cafa propiedad que tenga (una para referens, otra para contador, etc)
    const [referens, seteoReferencias] = useState([]);

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


    /* DidMount */
    useEffect(() => { 
        new Promise((resolve, reject) => {
            setTimeout(resolve(referensData), 10000)
        }).then(
            (referenceResolve) => {
                seteoReferencias(referenceResolve)
            }
        )

    }, [])  

     /* DidUpdate */
    useEffect(() => { console.log('esto es un component DidUpdate')}, [referens])  

    return(
        <div className="Card-container">
            {referens.map((item) => 
                <ItemList {...item} />)}
  
        </div>
    )
}

export default ItemListContainer;