import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NavBar extends React.Component {
    state = {
        currentUser: JSON.parse(window.localStorage.getItem('currentUser'))
    }


    render() {
        // console.log('navbar', this.state.currentUser)
        if (!this.state.currentUser) {
            return(
                <div className='nav-bar'>
                    <p>View Games</p>
                    {/* <p>Search Games</p>
                    <p>Dice Roller</p>
                    <p>Probability Calculator</p> */}
                    <Link to='/login'>
                    <p>Log In</p>
                    </Link>
                    <p>SignUp</p>
                    <Link to='/home'>
                    <p>Home</p>
                    </Link>
                    <p>SignUp</p>
                    <Link to='/login'>
                    <button>Log In</button>
                    </Link>
                </div>
            )
        } else {
    let userHomeString = `/userhome/${this.state.currentUser.id}`
    return (
        <div className='nav-bar'>
                    <Link to={userHomeString}>
                    <p>My Games</p>
                    </Link>
                    <p>View Games</p>
                    {/* <p>Search Games</p>
                    <p>Dice Roller</p>
                    <p>Probability Calculator</p> */}
                    <Link to='/home'>
                    <p>Home</p>
                    </Link>
                    {/* <Link to='/login'> */}
                    <button onClick={()=> localStorage.clear()}>Log Out</button>
                    {/* </Link> */}
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