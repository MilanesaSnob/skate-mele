import React from 'react';
import ItemCount from './ItemCount';


export default class ItemListCont extends React.Component {

    render(){
        return (
            <div>
                <ItemCount stock={5} initial={1} onAdd={() => alert('se agregó al carrito')}/>
            </div>
        )        
    }
}