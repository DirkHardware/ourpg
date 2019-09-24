import React from 'react';
import '../index.css';
import rootReducer from '../reducer'
import { Link } from 'react-router-dom'


const GameCard = (props) => {

    let linkString = `games/${props.id}`

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