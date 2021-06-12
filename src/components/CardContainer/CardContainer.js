import { render } from '@testing-library/react';
import React from 'react';
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

export default class CardContainer extends React.Component {
    state = {
        //Lo inicializamos en la clase
        referens: referensData,
    }

    //map nos ejecuta una función por cada elemento dentro de nuestro array y nos devuelve un nuevo arreglo, nunca usar {for()} en React
    //item vendria a ser cada uno de nuestros objetos (message, user, etc)
    render(){
        return(
            <div className="Card-container">
                {this.state.referens.map((item) => 
                <div className="Card">
                    <p>{item.message}</p>
                    {item.user.name}<br/>
                    {item.user.course}
                </div>
                )}
            </div>
        )
    }
}