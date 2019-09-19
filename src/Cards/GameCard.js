import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchPublicGames } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'

const GameCard = (props) => {

    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default GameCard