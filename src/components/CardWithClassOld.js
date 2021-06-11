import React from 'react';

export default class CardWithClass extends React.Component {

    constructor(){
        this.state = {
            contador: 1,
        }
        
        // Tengo que meter las funciones creadas dentro del contexto de la clase cosa que con funtion arrows no es necesario porque ya setean el contexto donde son declaradas
        this.sumar = this.sumar.bind(this);
        this.restar  = this.restar.bind(this);
    }   

 
    componentWillMount(){
        console.log('El componente se va a renderizar');
    }
    componentDidMount(){
        console.log('Hola, ya estoy Renderizado');
    }
    componetDidUpdate(){
        console.log('Hola, me estoy actualizando', this.state.contador);
    }
    componentWillUnmount(){

    }

    //El viejo tipo de funcion (min.52 video) requiere que el state sea con this lo metamos en un constructor() ver ejemplo old
    sumar(){
        //con setState cambio un estado
        this.setState({contador : this.state.contador + 1})
    }
    restar(){
        this.setState({contador : this.state.contador - 1})
    }

    // render nos permite devolver el HTML
    render(){
        return (
            <div>
                <h2>TESTEANDO CARD WITH CLASS</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        )
    }
}

/*export default CardWithClass; // no es necesario porque agrego el export default en la declaración de la clase*/