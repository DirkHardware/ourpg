import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Redux from 'redux';
import { connect } from 'react-redux';

function NavBar() {
    return(
        <div className='Nav-bar'>
            <p>New Game</p>
            <p>View Games</p>
            <p>Search Games</p>
            <p>Dice Roller</p>
            <p>Probability Calculator</p>
            <Link to='/login/'>
            <p>Log In</p>
            </Link>
            <p>SignUp</p>
        </div>
    )
}

// function msp(state) {
//     // console.log("map state to props", state)
//     return { loggedIn: state.loggedIn }
// }
// function mdp(dispatch) {
//     // console.log("map dispatch to props")
//     return { logOutUser: () => dispatch({ type: "LOG OUT" }), logInUser: () => dispatch({ type: "LOG IN" }) }
// }

export default NavBar