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
                    <p className='sign-up'>Sign Up</p>
                    <Link to='/home'>
                    <p className='home'>Home</p>
                    </Link>
                    <p>SignUp</p>
                    <Link to='/login'>
                    <p className='login'>Log In</p>
                    </Link>
                </div>
            )
        } else {
    let userHomeString = `/userhome/${this.state.currentUser.id}`
    return (
        <div className='nav-bar'>
                    <Link to={userHomeString}>
                    <p className='my-games'>My Games</p>
                    </Link>
                    <Link to='/home'>
                    <p className='home'>Home</p>
                    </Link>
                    {/* <Link to='/login'> */}
                    <p className='logout' onClick={()=> localStorage.clear()}>Log Out</p>
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