import React from 'react';
import { Provider, connect } from 'react-redux'
import { fetchUser } from '../actions'
import '../index.css';
import rootReducer from '../reducer'
import LoginCard from '../Cards/LoginCard'

class PublicGameView extends React.Component {

    // componentDidMount() {
    //     // fire off dispatch to send my fetch request 
    //     let username = fatvalkilmer
    //     this.props.fetchUser(fatvalkilmer)
    // }

    // render() {
    //     console.log('SIGN UP PROPS: ', this.props)
    //     return (
    //       <div>
    //         <h1>Log In</h1>
    //         <form onSubmit={this.handleSubmit}>
    //           <label>Username: </label>
    //           <input type="text" name="username" onChange={this.handleChange}/>
    //           <label>Password: </label>
    //           <input type="text" name="password" onChange={this.handleChange}/>
    //           <button>signup</button>
    //         </form>
    //       </div>
    //     )
    //   }

    render() {
        return (
            <div>
                <LoginCard
                    username = {'fatvalkilmer'}
                />
            </div>
        )
    }
}

function msp(state){
    return({loggedIn: state.loggedIn, gameElements: state.gameElements, currentUser: state.currentUser})
}

function mdp(dispatch, username){
    return({fetchUser: fetchUser(dispatch, username)})
}

export default connect(msp, mdp)(PublicGameView)