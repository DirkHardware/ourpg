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
            .then(this.renderRedirect())
            // .then(this.props.fetchGameElements())
    };

    renderRedirect = () => {
        console.log('redirecting')
        console.log(this.selectedGame.id)
        let linkString = `http://localhost:30001/usergames/${this.props.selectedGame.id}`
        window.location.replace({linkString});
    }

    render() {
        let linkString = `/userelements/${this.props.id}`
        return(
            <div>
                <Link to={linkString}>
                <h3>Title: {this.props.title}</h3>
                </Link>
                <p>Description: {this.props.description}</p>
                <button onClick={this.handleClick}>Delete</button>
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