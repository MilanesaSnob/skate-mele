import React from 'react';
import Contador from './Contador';

//componente de estado statefull
export default class CardWithClass extends React.Component {

    state = {
        contador: 1,
    }    

    //ciclos de vida (momentos o etapas diferentes del proceso de renderizado, para acceder a los mismos utilizamos los componentes de clase)
    //los componentes de clase son Métodos a los que tengo acceso al hacer el extends de React.ComponentS

    //WillMount es el momento anterior a que el componente se renderice en el DOM
    componentWillMount(){
        console.log('El componente se va a renderizar');
    }
    //DidMount es el momento en el que el componente ya está renderizado en el DOM
    componentDidMount(){
        console.log('Hola, ya estoy Renderizado');
    }
    //DidUpdate es el momento en el que el componente cambia y se renderizan esos cambios en el DOM (acá metemos la lógica)
    componetDidUpdate(){
        console.log('Hola, me estoy actualizando', this.state.contador);
    }
    //WillUnmount es el momento en que el componente es eliminado del render (DOM)
    componentWillUnmount(){

    }


    //Creamos las funciónes arrows que setean el contexto donde son creadas a diferencia de las funciones viejas
    //El viejo tipo de funcion (min.52 video) requiere que el state sea con this lo metamos en un constructor() ver ejemplo old
    sumar = () => {
        //con setState cambio un estado
        this.setState({contador : this.state.contador + 1})
    }
    restar = () => {
        if(this.state.contador === 0){
            // le hago el return para que vuelva (no siga pasando) y quede en 0
            // La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
            return
        }
        this.setState({contador : this.state.contador - 1})
    }

    // render es el ciclo de vida que nos permite devolver el HTML
    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <h1>{'Hola ' + this.props.hola}</h1>
                <p>Los props son para pasarle propiedades a los hijos, o sea, información a un componente</p>
                <h2>TESTEANDO CARD WITH CLASS</h2>
                <h3>{this.state.contador}</h3>
                <Contador contadorNumero={this.state.contador} />
                <Contador empresa="coderhouse" contadorNumero={this.state.contador} />
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        )
    }
}

/*export default CardWithClass; // no es necesario porque agrego el export default en la declaración de la clase*/