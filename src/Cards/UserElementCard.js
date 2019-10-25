import React from 'react';
import '../index.css';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchGameElements} from '../actions'



class UserElementCard extends React.Component {

    handleClick = e => {
        e.preventDefault();
        console.log('handle clicks id is:', this.props.id)
        fetch(`http://localhost:3000/elements/${this.props.id}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(console.log(this.props.id))
            .then(this.props.history.push(`/usergames/${this.props.game_id}`)
            )
            // .then(this.props.fetchGameElements())
    };

    render() {
        let linkString = `/userelements/${this.props.id}`
        return(
            <div className='user-element-card'>
                <div className='user-element-card-text'>
                    <div className='user-element-card-title'>
                        <Link to={linkString}>
                        <h3>{this.props.title}</h3>
                        </Link>
                    </div>
                    <div className='user-element-card-description'>
                        <p>{this.props.description}</p>
                        <button className='delete-button' onClick={this.handleClick}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

function msp(state){
    return({loggedIn: state.loggedIn, selectedGame: state.selectedGame, gameElements: state.gameElements})
}

function mdp(dispatch, props){
    let id = props.id
    return({fetchGameElements: fetchGameElements(dispatch, id)})
}

export default connect(msp, mdp)(UserElementCard) 