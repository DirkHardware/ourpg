import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'

class PublicElementView extends React.Component {

    componentDidMount() {
        this.props.fetchElement()
        console.log(this.props.element)
    }  

    render(){
        return(
        <div>
            <p>this is a test</p>
            <p>{this.props.selectedElement.content}</p>
        </div>)
    }
}

function msp(state) {   
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement })
}

function mdp(dispatch){
    // let id = props.id
    // return({fetchElement: fetchElement(dispatch, id)})
    return({fetchElement: fetchElement(dispatch)})
}

export default connect(msp, mdp)(PublicElementView)