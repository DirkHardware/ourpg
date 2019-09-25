import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const UserElementCard = (props) => {

    let linkString = `/userelements/${props.id}`
        return(
            <div>
                <Link to={linkString}>
                <h3>Title: {props.title}</h3>
                </Link>
                <p>Description: {props.description}</p>
            </div>
        )
    }

export default UserElementCard 