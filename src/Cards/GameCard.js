import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchPublicGames } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'
import { Routes, Switch, Link } from 'react-router-dom'


const GameCard = (props) => {

    let linkString = `games/${props.id}`
    // let linkString = `/GameCard`


    return(
        <div>
            <Link to={linkString}>
            <h3>Title: {props.title}</h3>
            </Link>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default GameCard