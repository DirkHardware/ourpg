import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import UserGamesContainer from '../Containers/UserGamesContainer'

function Welcome(props) {
    
    let linkString = `/usergames/${props.id}/newgame`
    return(
        <div>
            <Link to={linkString}>
                <button>
                    New Game
                </button>
            </Link>
            <UserGamesContainer
            id = {props.id}
            />
        </div>
    )
}

function msp(state) {
    // console.log("map state to props", state)
    return { loggedIn: state.loggedIn }
}
function mdp(dispatch) {
    // console.log("map dispatch to props")
    return { logOutUser: () => dispatch({ type: "LOG OUT" }), logInUser: () => dispatch({ type: "LOG IN" }) }
}

export default connect(msp, mdp)(Welcome) 