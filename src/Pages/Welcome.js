import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import FrontPageGamesContainer from '../Containers/FrontPageGamesContainer'

function Welcome(props) {
    return(
        <div>
            <FrontPageGamesContainer/>
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