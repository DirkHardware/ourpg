import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const UserElementCard = (props) => {

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/elements/${this.id}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
    };

    let linkString = `/userelements/${props.id}`
        return(
            <div>
                <Link to={linkString}>
                <h3>Title: {props.title}</h3>
                </Link>
                <p>Description: {props.description}</p>
                <button onClick={() => handleSubmit(e)}>Delete</button>
            </div>
        )
    }

export default UserElementCard 