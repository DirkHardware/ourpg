import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Redux from 'redux';
import { connect } from 'react-redux';
import FrontPageGamesContainer from './Containers/FrontPageGamesContainer'

function Welcome(props) {
    return(
        <div>
            <Route path="/home" render={() =>
            // <h1>This is the welcome page!</h1>
            <FrontPageGamesContainer/>
            }/>
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