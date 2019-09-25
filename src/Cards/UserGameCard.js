import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const UserGameCard = (props) => {

    let linkString = `/usergames/${props.id}`

    return(
        <div className='user-game-card'>
            <Link to={linkString}>
            <h3>Title: {props.title}</h3>
            </Link>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default UserGameCard