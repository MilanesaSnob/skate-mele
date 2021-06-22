import React from 'react';
import ItemCount from './ItemCount';
import './ItemListContainer.css';

export default class ItemListCont extends React.Component {

    render(){
        return (
            <div>
                <h1>{'Hola ' + this.props.greetings}</h1>
                <ItemCount stock={5} initial={1} onAdd={() => alert('se agregó al carrito')}/>
            </div>
        )        
    }
}