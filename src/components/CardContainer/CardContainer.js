import React from 'react';
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

export default class CardContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            //Lo inicializamos en la clase
            referens: referensData,
            contador: 0
        }
    }
    /* Se puede inicializar sin constructor() y en ese caso no necesita el this
    state = {
        //Lo inicializamos en la clase
        referens: referensData,
        contador: 0
    }
    */

    componentDidMount(){
        console.log('Hola, ya estoy Renderizado');
    }

    componetDidUpdate(){
        console.log('Hola, me estoy actualizando');
    }

    /* Defino un nuevo metodo de la clase para pasar por props*/
    buttonFunction = () => {
        alert('Funcion del padre CardContainer enviada mediante props a su hijo Card')
    }

    /* Defino el método para agregar cards */ 
    addNewCard = () => {
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
        this.setState({
            referens: [ ... this.state.referens, newReference]
        })
    }

    //map nos ejecuta una función por cada elemento dentro de nuestro array y nos devuelve un nuevo arreglo, nunca usar {for()} en React
    //map es inmutable en cambio el for nos muta y se arma despiole 
    //item vendria a ser cada uno de nuestros objetos (message, user, etc)
    render(){
        return(
            <div className="Card-container">
                {this.state.referens.map((item) => 
                    <Card {...item} buttonFunction={this.buttonFunction}/>)}

                <button onClick={this.addNewCard} style={{position:'fixed', top:'10vh', left:'0'}}>Agregar Card</button>    
            </div>
        )
    }
}