import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const PublicGameCard = (props) => {

    let linkString = `/publicgames/${props.id}`

    return(
        <div className='public-game-card'>
            <Link to={linkString}>
            <h3>{props.title}</h3>
            </Link>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default PublicGameCard