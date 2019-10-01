import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const PublicGameCard = (props) => {

    let linkString = `/publicgames/${props.id}`

    return(
        <div className='public-game-card'>
            <div className='public-game-card-text'>
                <div className='public-game-card-title'>
                    <Link to={linkString}>
                    <h3>{props.title}</h3>
                    </Link>
                </div>
                <div className='public-game-card-description'>
                    <p>Description: {props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PublicGameCard