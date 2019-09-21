import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'

class Element extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchElement()
        console.log(this.props.element)
    }

    render(){
        if(this.props.element === null){
            return(
            <h2>loading</h2>
            )
        }
        return (
            <div>
                <p> test </p>
                {/* <h3>{this.props.element}</h3>
                <p>{publicGamesComponents}</p> */}
            </div>
        )
    }
}

function msp(state) {
    console.log("map state to props", state)
    return { element: state.element }
}

function mdp(dispatch) {
    return { fetchElements: fetchElement(dispatch) }
}

export default connect(msp, mdp)(Element) 