import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'
import Element from '../Cards/Element'
import { BrowserRouter } from 'react-router'

class PublicGameView extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchGameElements()
        console.log(this.props.element)
    }

    // render(){
    //     return()
    // }
}

function msp(state){
    return({loggedIn: state.loggedIn, gameElements: state.gameElements})
}

function mdp(state){
    let id = 2
    return({fetchGameElements: fetchGameElements(dispatch, id)})
}

export default connect(msp, mdp, PublicGameView)