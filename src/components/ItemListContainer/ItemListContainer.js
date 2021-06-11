import React from 'react';
import './ItemListContainer.css';

export default class ItemListContainer extends React.Component {

    render(){
        return (
            <div>
                <h1>{'Hola ' + this.props.greetings}</h1>
            </div>
        )        
    }
}