import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Redux from 'redux';
import { connect } from 'react-redux';

class NavBar extends React.Component {
    state = {
        currentUser: JSON.parse(window.localStorage.getItem('currentUser'))
    }


    render() {
        let userHomeString = `/userhome/${this.state.currentUser.id}`
        // console.log('navbar', this.state.currentUser)
        if (!this.state.currentUser) {
            return(
                <div className='Nav-bar'>
                    <p>New Game</p>
                    <p>View Games</p>
                    <p>Search Games</p>
                    <p>Dice Roller</p>
                    <p>Probability Calculator</p>
                    <Link to='/login'>
                    <p>Log In</p>
                    </Link>
                    <p>SignUp</p>
                    <Link to='/home'>
                    <p>Home</p>
                    </Link>
                </div>
            )
        } else {
    return (
        <div className='Nav-bar'>
                    <p>New Game</p>
                    <Link to={userHomeString}>
                    <p>My Games</p>
                    </Link>
                    <p>View Games</p>
                    <p>Search Games</p>
                    <p>Dice Roller</p>
                    <p>Probability Calculator</p>
                    <Link to='/login'>
                    <p>Log Out</p>
                    </Link>
                    <p>SignUp</p>
                    <Link to='/home'>
                    <p>Home</p>
                    </Link>
                </div>
    )}
    }
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