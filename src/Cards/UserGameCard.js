import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const UserGameCard = (props) => {

    let linkString = `/usergames/${props.id}`

    return(
        <div className='user-game-card'>
            <div className='user-game-card-text'>
            <Link to={linkString}>
            <h3 className='user-game-card-title'>{props.title}:</h3>
            </Link>
            <p className='user-game-card-description'>{props.description}</p>
            </div>
        </div>
    )
}

export default UserGameCard