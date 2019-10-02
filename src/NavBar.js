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
                    <h3 className='sign-up'>Sign Up</h3>
                    <Link to='/home'>
                    <h3 className='home'>Home</h3>
                    </Link>
                    <h3>SignUp</h3>
                    <Link to='/login'>
                    <h3 className='login'>Log In</h3>
                    </Link>
                </div>
            )
        } else {
    let userHomeString = `/userhome/${this.state.currentUser.id}`
    return (
        <div className='nav-bar'>
                    <Link to={userHomeString}>
                    <h3 className='my-games'>My Games</h3>
                    </Link>
                    <Link to='/home'>
                    <h3 className='home'>Home</h3>
                    </Link>
                    {/* <Link to='/login'> */}
                    <h3 className='logout' onClick={()=> localStorage.clear()}>Log Out</h3>
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