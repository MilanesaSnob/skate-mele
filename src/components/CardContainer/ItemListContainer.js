import { reject, resolve } from 'q';
import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

//Creamos un array de objetos que va a contener a nuestros objetos
const productosData = [
    {
        producto: {
            id: 'sk001',
            title: 'Santa Cruz',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 75,
            pictureUrl: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        producto: {
            id: 'lg001',
            title: 'Land Yachtz',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 84,
            pictureUrl: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        producto: {
            id: 'sk002',
            title: 'Powell Peralta',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 20,
            pictureUrl: 'https://picsum.photos/id/237/200/300'
        }
    },
    {
        producto: {
            id: 'lg003',
            title: 'Sector 9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 85,
            pictureUrl: 'https://picsum.photos/id/237/200/300'
        }
    },
]
function ItemListContainer() {

    const [referens, seteoReferencias] = useState([]);


    /* DidMount */
    useEffect(() => { 
        new Promise((resolve, reject) => {
            setTimeout(resolve(productosData), 30000)
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