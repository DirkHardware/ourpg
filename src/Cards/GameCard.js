import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchPublicGames } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'
import { routes, } from 'react-router-dom'


const GameCard = (props) => {

    return(
        <div>
            <h3>Title: {props.title}</h3>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default GameCard